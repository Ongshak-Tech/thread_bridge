import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "threadBridge's real-time alerts let us correct issues immediately. We've cut waste dramatically without slowing production.",
    author: "Operations Lead, DenimMill Co.",
  },
  {
    quote:
      "The system integrated in days. Operators love the simple interface and managers love the data.",
    author: "Plant Manager, KnitWorks",
  },
  {
    quote:
      "Finally, AI that understands textiles. The ROI was obvious within the first month.",
    author: "Quality Director, PrimeTextiles",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="text-center text-3xl font-bold text-slate-800 sm:text-4xl">What partners say</h3>
        <div className="mt-10">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="px-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <p className="text-lg text-slate-700">“{t.quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-slate-600">{t.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #f5f7fa 0%, #eef2f7 100%)" }} />
    </section>
  );
}
