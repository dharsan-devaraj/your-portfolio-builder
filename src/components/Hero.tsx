import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Scroll-based word separation - FULL and STACK push apart
  const fullX = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const stackX = useTransform(scrollYProgress, [0, 0.4], [0, 120]);
  const dashWidth = useTransform(scrollYProgress, [0, 0.4], [80, 250]);

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

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-x-hidden bg-background">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 flex-1 flex flex-col justify-between py-8">
        {/* Top spacer */}
        <div className="h-8" />
        
        {/* Main Title Section */}
        <div className="flex-1 flex flex-col justify-center">
          {/* FULL — STACK line */}
          <h1 className="text-[clamp(5rem,18vw,15rem)] font-black leading-[0.85] tracking-[-0.02em] overflow-visible whitespace-nowrap" style={{ transform: 'scaleY(1.3)', transformOrigin: 'top' }}>
            <span className="flex items-center justify-start">
              <motion.span 
                style={{ x: fullX }}
                className="inline-flex items-center"
              >
                {"FULL".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors duration-300 cursor-default"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              
              {/* Single expanding dash */}
              <motion.span 
                style={{ width: dashWidth }}
                className="inline-block h-[0.06em] bg-muted-foreground/40 mx-3 md:mx-6 self-center flex-shrink-0"
              />
              
              <motion.span 
                style={{ x: stackX }}
                className="inline-flex items-center"
              >
                {"STACK".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 5}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors duration-300 cursor-default"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          </h1>
          
          {/* DEVELOPER */}
          <h1 className="text-[clamp(5rem,18vw,15rem)] font-black leading-[0.9] tracking-[-0.02em] overflow-visible whitespace-nowrap mt-8" style={{ transform: 'scaleY(1.3)', transformOrigin: 'top' }}>
            <span className="block">
              {"DEVELOPER".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 10}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors duration-300 cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Bottom Section - Full Width with About on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-0 border-t border-muted-foreground/20 pt-8 mt-8">
          {/* Left side - Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="order-1 md:order-1"
          >
            <button
              onClick={() => scrollToSection("skills")}
              className="group flex items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
            >
              <span className="text-[10px] font-mono tracking-[0.15em] uppercase">Scroll down</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-3 h-3" />
              </motion.div>
            </button>
          </motion.div>

          {/* Center - Year */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center order-2 md:order-2"
          >
            <p className="text-xs font-mono text-muted-foreground/40 tracking-wider">2024</p>
          </motion.div>

          {/* Right side - About */}
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-sm text-left md:text-right order-3 md:order-3 w-full md:w-auto"
          >
            <p className="text-xs font-mono text-muted-foreground/50 tracking-[0.2em] mb-3 uppercase">
              About
            </p>
            <p className="text-muted-foreground/60 leading-relaxed text-sm md:text-base hover:text-muted-foreground/80 transition-colors duration-300 cursor-default">
              I am <span className="text-muted-foreground/80">DHARSAN D</span>, a passionate full-stack developer 
              based in Chennai. Currently pursuing B.Tech ECE at <span className="text-muted-foreground/80">SRM University KTR</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
