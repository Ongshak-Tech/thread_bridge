import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  /** Small teal label above the title. */
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

/**
 * The shared eyebrow / title / subtitle block every page section opens with.
 * Kept in one place so spacing, type scale and animation stay identical.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.p
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: "#3ab5a9" }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-lg leading-7 text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
