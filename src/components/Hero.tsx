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

  const line1 = "FULL——STACK";
  const line2 = "DEVELOPER";

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
            className="flex items-center justify-between mb-20"
          >
            <p className="font-mono text-muted-foreground text-xs tracking-[0.3em] uppercase">
              Full Stack Developer
            </p>
            <p className="font-mono text-muted-foreground text-xs tracking-[0.3em] uppercase">
              Folio / 2024 — Present
            </p>
          </motion.div>

          <motion.div style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}>
            <h1 className="text-[clamp(3.5rem,16vw,14rem)] font-bold leading-[0.85] tracking-[-0.04em] overflow-hidden">
              <span className="block text-outline">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-foreground">
                {line2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length}
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
          </motion.div>

          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mt-20"
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
                className="group relative text-muted-foreground hover:text-foreground transition-all duration-500"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted-foreground hover:text-foreground transition-all duration-500"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative text-muted-foreground hover:text-foreground transition-all duration-500"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-lg text-right"
            >
              <p className="text-xs font-mono text-muted-foreground tracking-[0.2em] mb-4 uppercase">About</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am <span className="text-foreground font-semibold">DHARSAN D</span>, a passionate full-stack developer 
                based in Chennai, India. Currently pursuing B.Tech ECE at <span className="text-foreground">SRM University KTR</span>, 
                I specialize in building scalable web applications, RESTful APIs, and modern user interfaces.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-12 right-6 md:right-12"
          >
            <motion.button
              onClick={() => scrollToSection("skills")}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              whileHover={{ y: 5 }}
            >
              <span className="text-xs font-mono tracking-wider">Scroll down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
