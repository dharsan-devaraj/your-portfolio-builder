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
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  
  // Scroll-based word separation
  const fullStackX = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const developerX = useTransform(scrollYProgress, [0, 0.4], [0, 150]);
  const dashWidth = useTransform(scrollYProgress, [0, 0.4], [60, 200]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.04,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-muted-foreground/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-between mb-16"
          >
            <p className="font-mono text-muted-foreground/70 text-sm tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default">
              Full Stack Developer
            </p>
            <p className="font-mono text-muted-foreground/70 text-sm tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default">
              Folio / 2024 — Present
            </p>
          </motion.div>

          <motion.div style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}>
            <h1 className="text-[clamp(4rem,18vw,16rem)] font-bold leading-[0.85] tracking-[-0.04em] overflow-hidden">
              {/* FULL—STACK line */}
              <span className="flex items-center justify-start">
                <motion.span 
                  style={{ x: fullStackX }}
                  className="inline-flex items-center"
                >
                  {"FULL".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={charVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      className="inline-block text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                
                {/* Single big dash that expands on scroll */}
                <motion.span 
                  style={{ width: dashWidth }}
                  className="inline-block h-[0.08em] bg-muted-foreground/40 mx-4 self-center"
                />
                
                <motion.span 
                  style={{ x: developerX }}
                  className="inline-flex items-center"
                >
                  {"STACK".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i + 5}
                      variants={charVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      className="inline-block text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
              
              {/* DEVELOPER line */}
              <span className="block">
                {"DEVELOPER".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 10}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ color: "hsl(var(--foreground))" }}
                    className="inline-block text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 cursor-default"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mt-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted-foreground/60 hover:text-muted-foreground transition-all duration-500"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted-foreground group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted-foreground/60 hover:text-muted-foreground transition-all duration-500"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted-foreground group-hover:w-full transition-all duration-300" />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative text-muted-foreground/60 hover:text-muted-foreground transition-all duration-500"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted-foreground group-hover:w-full transition-all duration-300" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-lg text-right"
            >
              <motion.p 
                className="text-xs font-mono text-muted-foreground/60 tracking-[0.2em] mb-4 uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default"
              >
                About
              </motion.p>
              <p className="text-muted-foreground/70 leading-relaxed text-sm md:text-base hover:text-muted-foreground transition-colors duration-300 cursor-default">
                I am <span className="text-muted-foreground font-semibold hover:text-foreground transition-colors duration-300">DHARSAN D</span>, a passionate full-stack developer 
                based in Chennai, India. Currently pursuing B.Tech ECE at <span className="text-muted-foreground hover:text-foreground transition-colors duration-300">SRM University KTR</span>, 
                I specialize in building scalable web applications, RESTful APIs, and modern user interfaces.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll button - positioned at bottom of viewport, not overlapping content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={() => scrollToSection("skills")}
          className="group flex items-center gap-3 text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30"
          whileHover={{ y: 5 }}
        >
          <span className="text-xs font-mono tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
