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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6">
        {/* Social Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 border border-muted-foreground/30 overflow-hidden group rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background fill animation - slides up from bottom */}
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ y: "100%" }}
                animate={{ y: hoveredIndex === index ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Content with scroll up animation */}
              <span className="relative z-10 flex items-center gap-2 overflow-hidden h-5">
                <motion.span
                  className="flex items-center gap-2"
                  animate={{ 
                    y: hoveredIndex === index ? [0, -24, 0] : 0 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut",
                    repeat: hoveredIndex === index ? Infinity : 0,
                    repeatDelay: 0.3
                  }}
                >
                  <link.icon className={`w-4 h-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-muted-foreground/60'}`} />
                  <span className={`text-xs font-mono tracking-wider uppercase transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-muted-foreground/60'}`}>
                    {link.name}
                  </span>
                </motion.span>
              </span>
            </motion.a>
          ))}

          {/* Back to top button with same style */}
          <motion.button
            onClick={scrollToTop}
            className="relative px-6 py-3 border border-muted-foreground/30 overflow-hidden group rounded-full"
            onMouseEnter={() => setHoveredIndex(99)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-orange-500"
              initial={{ y: "100%" }}
              animate={{ y: hoveredIndex === 99 ? "0%" : "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-5">
              <motion.span
                className="flex items-center gap-2"
                animate={{ 
                  y: hoveredIndex === 99 ? [0, -24, 0] : 0 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  repeat: hoveredIndex === 99 ? Infinity : 0,
                  repeatDelay: 0.3
                }}
              >
                <ArrowUp className={`w-4 h-4 transition-colors duration-300 ${hoveredIndex === 99 ? 'text-black' : 'text-muted-foreground/60'}`} />
                <span className={`text-xs font-mono tracking-wider uppercase transition-colors duration-300 ${hoveredIndex === 99 ? 'text-black' : 'text-muted-foreground/60'}`}>
                  Back to Top
                </span>
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Bottom info */}
        <div className="flex items-center justify-center pt-8 border-t border-border/20">
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-wider uppercase">
            © 2024 — Present DHARSAN D
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;