import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Bar - Matching seyi.dev exactly */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 md:px-10 py-6"
      >
        <div className="flex items-start justify-between">
          {/* Left - Name stacked */}
          <div className="flex flex-col">
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase leading-tight">
              DHARSAN
            </span>
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase leading-tight">
              D
            </span>
          </div>

          {/* Center - Role/Folio */}
          <div className="hidden md:flex flex-col items-center">
            <span className="text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase leading-tight">
              FULL STACK DEVELOPER
            </span>
            <span className="text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase leading-tight">
              FOLIO / 2021 — 2024
            </span>
          </div>

          {/* Right - Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[10px] md:text-[11px] font-medium tracking-[0.08em] text-foreground uppercase px-4 py-2 border border-foreground/80 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            CONTACT
          </button>
        </div>
      </motion.header>

      {/* Main Hero Content - Full width typography like seyi.dev */}
      <div className="flex-1 flex items-center px-6 md:px-10 pt-20">
        <div className="w-full">
          {/* FULL —— STACK - First line */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-hero uppercase tracking-[0.02em] leading-[0.85] text-muted-foreground"
            style={{ fontSize: "clamp(4rem, 15vw, 16rem)" }}
          >
            <span className="inline-flex items-center">
              FULL
              {/* Long double dash like seyi.dev */}
              <span 
                className="inline-block bg-muted-foreground mx-[0.15em]"
                style={{
                  width: "clamp(3rem, 12vw, 14rem)",
                  height: "clamp(4px, 0.8vw, 10px)",
                }}
              />
              STACK
            </span>
          </motion.h1>

          {/* DEVELOPER - Second line */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-hero uppercase tracking-[0.02em] leading-[0.85] text-muted-foreground -mt-2 md:-mt-4"
            style={{ fontSize: "clamp(4rem, 15vw, 16rem)" }}
          >
            DEVELOPER
          </motion.h1>
        </div>
      </div>

      {/* About Text - Right side with "ABOUT" label like seyi.dev */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-6 md:right-10 bottom-[15vh] md:bottom-[18vh] max-w-[320px] lg:max-w-[380px] text-left"
      >
        <span className="text-[10px] font-medium tracking-[0.1em] text-muted-foreground/60 uppercase mb-3 block">
          About
        </span>
        <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[1.7] font-normal">
          I am a developer based in Chennai, India focused on creating interactive digital experiences on the web, currently pursuing B.Tech ECE at SRM University KTR whilst building clean, modern solutions.
        </p>
      </motion.div>

      {/* Scroll Indicator - Bottom Right like seyi.dev */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 right-6 md:right-10"
      >
        <button
          onClick={() => scrollToSection("skills")}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-[12px] font-normal tracking-[0.02em]">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
