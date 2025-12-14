import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Character animation variants
  const charVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.03,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const line1 = "FULL——STACK";
  const line2 = "DEVELOPER";

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl">
          {/* Large typography with scroll animations */}
          <motion.div style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-mono text-muted-foreground mb-8 text-xs tracking-[0.3em] uppercase"
            >
              Full Stack Developer / 2024 — Present
            </motion.p>

            {/* Large headline with character animation */}
            <h1 className="text-[clamp(3rem,14vw,12rem)] font-bold leading-[0.85] tracking-tighter mb-8 overflow-hidden">
              <span className="block text-outline">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
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

          {/* About text - right aligned like seyi.dev */}
          <motion.div
            style={{ y: aboutY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col md:flex-row md:justify-end md:items-start gap-8 mt-16"
          >
            <div className="max-w-md text-right">
              <p className="text-xs font-mono text-muted-foreground tracking-wider mb-4 uppercase">About</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am <span className="text-foreground font-semibold">DHARSAN D</span>, a developer based in 
                Chennai, India focused on creating robust web applications. Currently pursuing 
                B.Tech ECE at <span className="text-foreground">SRM University KTR</span>, working with 
                technologies like React, Node.js, Python, and more.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-end gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/dharsand0678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>

              {/* Scroll indicator - positioned within about section */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={() => scrollToSection("skills")}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer mt-12 ml-auto"
              >
                <span className="text-xs font-mono tracking-wider">Scroll down</span>
                <ArrowDown className="w-4 h-4 arrow-bounce" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;