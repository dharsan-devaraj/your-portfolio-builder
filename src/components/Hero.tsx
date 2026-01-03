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
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.03,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: { delay, duration: 0.8 },
    }),
  };

  return (
    <section className="relative h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6"
      >
        <div className="flex items-center justify-between">
          {/* Left - Name */}
          <span className="text-[11px] md:text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            DHARSAN D
          </span>

          {/* Center - Role */}
          <span className="hidden md:block text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            FULL STACK DEVELOPER — FOLIO / 2024 — PRESENT
          </span>

          {/* Right - Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            {["Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-[11px] md:text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16">
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left - Hero Text */}
          <div className="flex-1">
            {/* FULL — STACK */}
            <h1
              className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-foreground"
              style={{ fontSize: "clamp(4.5rem, 12vw, 11rem)" }}
            >
              <span className="flex items-center flex-wrap">
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

                {/* Thin dash */}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-foreground mx-[0.2em] origin-left"
                  style={{
                    width: "clamp(2rem, 8vw, 8rem)",
                    height: "clamp(3px, 0.6vw, 8px)",
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

            {/* DEVELOPER */}
            <h1
              className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-foreground -mt-2 md:-mt-4"
              style={{ fontSize: "clamp(4.5rem, 12vw, 11rem)" }}
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

          {/* Right - About Text */}
          <motion.div
            custom={1.2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="lg:max-w-[380px] lg:text-right"
          >
            <p
              className="text-muted-foreground leading-[1.7] font-normal"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
            >
              I am Dharsan D, a passionate full-stack developer based in Chennai.
              Currently pursuing B.Tech ECE at SRM University KTR. I craft digital
              experiences with clean code and creative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-6 md:left-12"
      >
        <button
          onClick={() => scrollToSection("skills")}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>

      {/* Bottom divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-foreground origin-left"
      />
    </section>
  );
};

export default Hero;
