import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.025,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Bar - Minimal */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 md:px-8 py-6"
      >
        <div className="flex items-center justify-between">
          {/* Left - Name */}
          <span className="text-[10px] md:text-[11px] font-normal tracking-[0.12em] text-muted-foreground/70 uppercase">
            Dharsan D
          </span>

          {/* Center - Role (hidden on mobile) */}
          <span className="hidden lg:block text-[10px] font-normal tracking-[0.1em] text-muted-foreground/50 uppercase">
            Full Stack Developer — 2024
          </span>

          {/* Right - Navigation */}
          <nav className="flex items-center gap-6">
            {["Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-[10px] md:text-[11px] font-normal tracking-[0.12em] text-muted-foreground/70 uppercase hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Hero Content - Hard Left Aligned */}
      <div className="flex-1 flex items-end pb-[18vh] pl-[10vw] md:pl-[12vw] lg:pl-[14vw] pr-6">
        <div className="w-full">
          {/* FULL — STACK */}
          <h1
            className="font-black uppercase tracking-[-0.03em] leading-none text-foreground"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            <span className="flex items-center">
              {"FULL".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}

              {/* Thin subtle dash */}
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.4 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block bg-foreground/60 mx-[0.25em] origin-left"
                style={{
                  width: "clamp(1.5rem, 5vw, 5rem)",
                  height: "clamp(2px, 0.35vw, 4px)",
                }}
              />

              {"STACK".split("").map((char, i) => (
                <motion.span
                  key={i + 4}
                  custom={i + 5}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* DEVELOPER - More vertical spacing */}
          <h1
            className="font-black uppercase tracking-[-0.03em] leading-none text-foreground mt-2 md:mt-4"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            {"DEVELOPER".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + 10}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      {/* About Text - Right side, small, faded */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-6 md:right-8 lg:right-12 bottom-[18vh] max-w-[280px] lg:max-w-[300px] text-right"
      >
        <p className="text-[11px] md:text-xs text-muted-foreground/40 leading-[1.8] font-normal">
          Full-stack developer based in Chennai. Currently pursuing B.Tech ECE at SRM University KTR. Building digital experiences with clean code.
        </p>
      </motion.div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-[10vw] md:left-[12vw] lg:left-[14vw]"
      >
        <button
          onClick={() => scrollToSection("skills")}
          className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
        >
          <span className="text-[10px] font-normal tracking-[0.15em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
