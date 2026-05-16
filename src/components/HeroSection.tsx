import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    "Animation",
    "VFX",
    "Video Editing",
    "Motion Design",
    "3D",
    "Compositing",
    "Color",
    "Storytelling",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-10 pt-28 overflow-hidden bg-background">
      {/* Background reel */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </div>

      <div className="container-x w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="mono text-xs tracking-[0.25em] uppercase text-foreground/70">
            Portfolio / 2025 — Open for commissions
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="display-xl text-[14vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.85] text-foreground"
        >
          We craft <span className="serif-italic text-primary">visual</span>
          <br />
          realities for screen.
        </motion.h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-8 items-end"
        >
          <div className="md:col-span-2">
            <p className="text-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              A multidisciplinary studio of one — building cinematic animation, photoreal VFX, and rhythm-driven edits for brands, filmmakers, and artists.
            </p>
          </div>

          <button
            onClick={scrollToWork}
            className="group inline-flex items-center justify-between gap-6 px-6 py-5 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 self-end"
          >
            <span className="mono text-xs tracking-widest uppercase">Selected Work</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-border/70 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-10 px-10">
              <span className="display-xl text-3xl md:text-4xl">{item}</span>
              <span className="text-primary text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
