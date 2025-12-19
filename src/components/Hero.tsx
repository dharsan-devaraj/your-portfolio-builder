import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.025,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          
          {/* Left: Hero Heading */}
          <div className="flex-1">
            {/* FULL STACK line */}
            <h1 
              className="font-display font-black uppercase tracking-[-0.04em] leading-[0.9]"
              style={{ fontSize: 'clamp(4rem, 10vw, 11rem)' }}
            >
              <span className="flex items-center">
                {"FULL".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
                  >
                    {char}
                  </motion.span>
                ))}
                
                {/* Horizontal bar */}
                <motion.span 
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block bg-muted-foreground/30 mx-[0.15em] origin-left"
                  style={{ 
                    width: '12vw',
                    height: '0.8vw',
                    maxWidth: '140px',
                    maxHeight: '10px',
                    minWidth: '40px',
                    minHeight: '4px',
                  }}
                />
                
                {"STACK".split("").map((char, i) => (
                  <motion.span
                    key={i + 4}
                    custom={i + 5}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
            
            {/* DEVELOPER */}
            <h1 
              className="font-display font-black uppercase tracking-[-0.04em] leading-[0.9] -mt-2 md:-mt-4"
              style={{ fontSize: 'clamp(4rem, 10vw, 11rem)' }}
            >
              {"DEVELOPER".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 10}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-12 md:mt-16"
            >
              <button
                onClick={() => scrollToSection("skills")}
                className="group flex items-center gap-3 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
              >
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-3 h-3" />
                </motion.div>
              </button>
            </motion.div>
          </div>

          {/* Right: About Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:max-w-[420px] lg:self-center"
          >
            <p className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] mb-4 uppercase">
              About
            </p>
            <p 
              className="text-muted-foreground/50 leading-[1.6] hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
              style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)' }}
            >
              I am <span className="text-muted-foreground/70">DHARSAN D</span>, a passionate full-stack developer 
              based in Chennai. Currently pursuing B.Tech ECE at{" "}
              <span className="text-muted-foreground/70">SRM University KTR</span>. 
              I craft digital experiences with clean code and creative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent origin-left"
      />
    </section>
  );
};

export default Hero;
