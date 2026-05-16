import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "ArtStation", url: "https://artstation.com" },
  { label: "Instagram", url: "https://instagram.com" },
  { label: "LinkedIn", url: "https://linkedin.com" },
];

const AboutContact = () => {
  return (
    <section id="about" className="bg-foreground text-background">
      <div className="container-x py-28 md:py-36">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mono text-xs tracking-[0.25em] uppercase text-background/60 mb-6">
            002 — About
          </p>
          <h2 className="display-xl text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            A multidisciplinary <span className="serif-italic text-primary">artist</span> obsessed with motion, light & story.
          </h2>
          <p className="mt-10 text-background/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            I craft cinematic animation, photoreal visual effects, and rhythm-driven edits for filmmakers, brands, and artists. From concept to delivery — every frame is treated like the only one that matters.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10 items-end border-t border-background/20 pt-16"
        >
          <div className="md:col-span-7">
            <p className="mono text-xs tracking-[0.25em] uppercase text-background/60 mb-6">
              003 — Let's collaborate
            </p>
            <a
              href="mailto:hello@youremail.com"
              className="group inline-flex items-baseline gap-4 display-xl text-5xl md:text-7xl lg:text-8xl leading-none hover:text-primary transition-colors"
            >
              <span>hello@youremail.com</span>
              <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-500 group-hover:rotate-45 shrink-0" />
            </a>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="mono text-xs tracking-[0.25em] uppercase text-background/60 mb-6">
              Elsewhere
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-background/20 pb-3 text-lg hover:text-primary transition-colors"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-28 pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4 mono text-xs text-background/50">
          <p>© {new Date().getFullYear()} VISUAL. — All rights reserved</p>
          <p>Crafted frame by frame.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
