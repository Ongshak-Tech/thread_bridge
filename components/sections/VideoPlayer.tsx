"use client";

import { useEffect, useRef } from "react";
import {
  MediaPlayer,
  type MediaPlayerInstance,
  MediaProvider,
  Poster,
  Track,
  useMediaState,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { chapterIndexAt } from "./chapters";

// Vidstack only routes to its server build under the `worker` export condition,
// which Next does not use, so the browser build would run during prerender and
// reach for `window`. Everything that touches @vidstack/react lives in this
// module, which Hero pulls in with `ssr: false`.

export type SeekFn = (time: number) => void;

type VideoPlayerProps = {
  /** Handed a seek function once the player exists; omit if nothing seeks. */
  onSeekReady?: (seek: SeekFn) => void;
  /** Called as playback crosses chapter boundaries; omit if nothing listens. */
  onChapterChange?: (index: number) => void;
  /** Start playing (with sound) as soon as the player mounts. */
  autoPlay?: boolean;
};

/** Reports the playing chapter to the section, so the list can highlight it. */
function ChapterWatcher({ onChange }: { onChange: (index: number) => void }) {
  const currentTime = useMediaState("currentTime");
  const index = chapterIndexAt(currentTime);

  useEffect(() => {
    onChange(index);
  }, [index, onChange]);

  return null;
}

export default function VideoPlayer({
  onSeekReady,
  onChapterChange,
  autoPlay = false,
}: VideoPlayerProps) {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    if (!onSeekReady) return;
    onSeekReady((time) => {
      const instance = player.current;
      if (!instance) return;
      instance.currentTime = time;
      instance.play().catch(() => {
        // Playback can still be refused (low power mode, for one); the seek stands.
      });
    });
  }, [onSeekReady]);

  return (
    <MediaPlayer
      ref={player}
      title="How threadBridge detects fabric defects in real time"
      src={{ src: "/video/threadBridge.mp4", type: "video/mp4" }}
      aspectRatio="16/9"
      autoPlay={autoPlay}
      // The file is ~32 MB, so nothing loads until playback is actually wanted.
      load={autoPlay ? "eager" : "play"}
      posterLoad="visible"
      playsInline
      className="overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm ring-1 ring-slate-900/5"
    >
      <MediaProvider>
        <Poster
          className="vds-poster"
          src="/video/poster.jpg"
          alt="An inspection machine scanning a roll of blue fabric while two operators watch the results on a floor dashboard"
        />
        <Track src="/video/chapters.vtt" kind="chapters" lang="en-US" default />
      </MediaProvider>
      {onChapterChange && <ChapterWatcher onChange={onChapterChange} />}
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
}
