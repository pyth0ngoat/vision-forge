import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Work", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "about" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight flex items-center gap-1"
        >
          VISUAL<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="relative text-foreground/80 hover:text-foreground transition-colors text-sm font-medium hover-fill pb-1"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:hello@youremail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
        >
          Get in touch
          <span className="text-base leading-none">→</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
