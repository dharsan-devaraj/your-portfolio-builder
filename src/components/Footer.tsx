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
  const marqueeText = "LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING? — ";

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
      <div className="container px-0">
        {/* Top line */}
        <div className="border-t border-muted-foreground/30" />
        
        {/* Marquee - Full width, above buttons */}
        <motion.div
          onClick={handleMarqueeClick}
          className="cursor-pointer overflow-hidden py-10 group w-full"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
                ease: "linear",
              },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-[-0.02em] text-muted-foreground/50 group-hover:text-orange-500 transition-colors duration-300 uppercase"
              >
                {marqueeText}
              </span>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Bottom line */}
        <div className="border-b border-muted-foreground/30 mb-10" />

        {/* Social Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 px-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 border border-muted-foreground/30 overflow-hidden group rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              {/* Background fill animation - slides up from bottom */}
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ y: "100%" }}
                animate={{ y: hoveredIndex === index ? "0%" : "100%" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              
              {/* Content container with clipping */}
              <span className="relative z-10 flex items-center gap-2 overflow-hidden h-6">
                {/* First text - scrolls up and out */}
                <motion.span
                  className="flex items-center gap-2 absolute inset-0"
                  animate={{ 
                    y: hoveredIndex === index ? "-100%" : "0%" 
                  }}
                  transition={{ 
                    duration: 0.2, 
                    ease: "easeOut"
                  }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground/60" />
                  <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground/60">
                    {link.name}
                  </span>
                </motion.span>
                
                {/* Second text - enters from bottom */}
                <motion.span
                  className="flex items-center gap-2"
                  initial={{ y: "100%" }}
                  animate={{ 
                    y: hoveredIndex === index ? "0%" : "100%" 
                  }}
                  transition={{ 
                    duration: 0.2, 
                    ease: "easeOut"
                  }}
                >
                  <link.icon className="w-5 h-5 text-black" />
                  <span className="text-sm font-mono tracking-wider uppercase text-black">
                    {link.name}
                  </span>
                </motion.span>
              </span>
            </motion.a>
          ))}

          {/* Back to top button with same style */}
          <motion.button
            onClick={scrollToTop}
            className="relative px-8 py-4 border border-muted-foreground/30 overflow-hidden group rounded-full"
            onMouseEnter={() => setHoveredIndex(99)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0 bg-orange-500"
              initial={{ y: "100%" }}
              animate={{ y: hoveredIndex === 99 ? "0%" : "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-6">
              {/* First text - scrolls up and out */}
              <motion.span
                className="flex items-center gap-2 absolute inset-0"
                animate={{ 
                  y: hoveredIndex === 99 ? "-100%" : "0%" 
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut"
                }}
              >
                <ArrowUp className="w-5 h-5 text-muted-foreground/60" />
                <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground/60">
                  Back to Top
                </span>
              </motion.span>
              
              {/* Second text - enters from bottom */}
              <motion.span
                className="flex items-center gap-2"
                initial={{ y: "100%" }}
                animate={{ 
                  y: hoveredIndex === 99 ? "0%" : "100%" 
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut"
                }}
              >
                <ArrowUp className="w-5 h-5 text-black" />
                <span className="text-sm font-mono tracking-wider uppercase text-black">
                  Back to Top
                </span>
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Bottom info */}
        <div className="flex items-center justify-center pt-8 border-t border-border/20 px-6">
          <p className="text-xs font-mono text-muted-foreground/50 tracking-wider uppercase">
            © 2024 — Present DHARSAN D
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;