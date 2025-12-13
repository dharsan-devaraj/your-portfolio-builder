import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Minimal geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl">
          {/* Large typography - seyi.dev inspired */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-muted-foreground mb-8 text-xs tracking-[0.3em] uppercase"
            >
              Full Stack Developer / 2021 — Present
            </motion.p>

            {/* Large headline */}
            <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-outline"
              >
                FULL——STACK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                DEVELOPER
              </motion.span>
            </h1>
          </motion.div>

          {/* About text - right aligned like seyi.dev */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row md:justify-end md:items-start gap-8 mt-12"
          >
            <div className="max-w-md text-right">
              <p className="text-xs font-mono text-muted-foreground tracking-wider mb-4 uppercase">About</p>
              <p className="text-muted-foreground leading-relaxed">
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-12 right-6 md:right-12 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
        >
          <span className="text-xs font-mono tracking-wider">Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
