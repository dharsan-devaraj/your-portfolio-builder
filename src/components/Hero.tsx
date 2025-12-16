import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-full mx-auto w-full">
          {/* Main Title - FULL—STACK on first line, DEVELOPER on second */}
          <div className="mb-12">
            {/* FULL — STACK line */}
            <h1 className="text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-[-0.03em] overflow-hidden">
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
            
            {/* DEVELOPER on separate line */}
            <h1 className="text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-[-0.03em] overflow-hidden -mt-2">
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

          {/* About Section - same page */}
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mt-8"
          >
            {/* Social Icons - Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="group text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </button>
            </motion.div>

            {/* About Text - Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="max-w-md text-right"
            >
              <p className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] mb-3 uppercase">
                About
              </p>
              <p className="text-muted-foreground/60 leading-relaxed text-sm hover:text-muted-foreground/80 transition-colors duration-300 cursor-default">
                I am <span className="text-muted-foreground/80">DHARSAN D</span>, a passionate full-stack developer 
                based in Chennai, India. Currently pursuing B.Tech ECE at <span className="text-muted-foreground/80">SRM University KTR</span>, 
                I specialize in building scalable web applications, RESTful APIs, and modern user interfaces.
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 flex items-center gap-3"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
