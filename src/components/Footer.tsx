import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/dharsand0678" 
  },
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com/dharsan678" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://instagram.com" 
  },
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const marqueeText = "LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING? —  ";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMarqueeClick = () => {
    const subject = encodeURIComponent("Lets work Together!");
    const body = encodeURIComponent("Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can.");
    window.location.href = `mailto:dharsand2006@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-4 md:px-6">
        {/* Top info row - symmetric */}
        <div className="grid grid-cols-3 items-center py-8 border-b border-muted-foreground/20">
          <div className="text-left">
            <p className="text-xs font-mono text-muted-foreground/50 tracking-wider uppercase">Email</p>
            <a href="mailto:dharsand2006@gmail.com" className="text-sm text-muted-foreground/70 hover:text-orange-500 transition-colors">
              dharsand2006@gmail.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground/50 tracking-wider uppercase">Location</p>
            <p className="text-sm text-muted-foreground/70">Chennai, India</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-muted-foreground/50 tracking-wider uppercase">University</p>
            <p className="text-sm text-muted-foreground/70">SRM University KTR</p>
          </div>
        </div>
        
        {/* Marquee - Full width */}
        <motion.div
          onClick={handleMarqueeClick}
          className="cursor-pointer overflow-hidden py-8 group w-full border-b border-muted-foreground/20"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex whitespace-nowrap justify-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-[-0.02em] text-muted-foreground/40 group-hover:text-orange-500 transition-colors duration-300 uppercase whitespace-nowrap inline-block px-4"
              >
                {marqueeText}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Social Buttons Row - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 md:px-10 py-4 border border-muted-foreground/30 overflow-hidden group rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {/* Background fill animation - slides up from bottom */}
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ y: "100%" }}
                animate={{ y: hoveredIndex === index ? "0%" : "100%" }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-orange-500/20 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content container with clipping */}
              <span className="relative z-10 flex items-center gap-2 overflow-hidden h-6">
                {/* First text - scrolls up and out */}
                <motion.span
                  className="flex items-center gap-2 absolute inset-0"
                  animate={{ 
                    y: hoveredIndex === index ? "-100%" : "0%",
                    opacity: hoveredIndex === index ? 0 : 1
                  }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground/60" />
                  <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground/60">
                    {link.name}
                  </span>
                </motion.span>
                
                {/* Second text - enters from bottom */}
                <motion.span
                  className="flex items-center gap-2"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? "0%" : "100%",
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  <link.icon className="w-5 h-5 text-black" />
                  <span className="text-sm font-mono tracking-wider uppercase text-black font-semibold">
                    {link.name}
                  </span>
                </motion.span>
              </span>
            </motion.a>
          ))}

          {/* Back to top button with same style */}
          <motion.button
            onClick={scrollToTop}
            className="relative px-6 md:px-10 py-4 border border-muted-foreground/30 overflow-hidden group rounded-full"
            onMouseEnter={() => setHoveredIndex(99)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-orange-500"
              initial={{ y: "100%" }}
              animate={{ y: hoveredIndex === 99 ? "0%" : "100%" }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            />
            
            <motion.div
              className="absolute inset-0 bg-orange-500/20 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 99 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-6">
              <motion.span
                className="flex items-center gap-2 absolute inset-0"
                animate={{ 
                  y: hoveredIndex === 99 ? "-100%" : "0%",
                  opacity: hoveredIndex === 99 ? 0 : 1
                }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                <ArrowUp className="w-5 h-5 text-muted-foreground/60" />
                <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground/60">
                  Back to Top
                </span>
              </motion.span>
              
              <motion.span
                className="flex items-center gap-2"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ 
                  y: hoveredIndex === 99 ? "0%" : "100%",
                  opacity: hoveredIndex === 99 ? 1 : 0
                }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                <ArrowUp className="w-5 h-5 text-black" />
                <span className="text-sm font-mono tracking-wider uppercase text-black font-semibold">
                  Back to Top
                </span>
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Bottom copyright - centered */}
        <div className="flex items-center justify-center pt-6 border-t border-border/20">
          <p className="text-xs font-mono text-muted-foreground/50 tracking-wider uppercase">
            © 2024 — Present DHARSAN D
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;