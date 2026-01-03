import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-foreground">
      <div className="px-6 md:px-12 lg:px-16 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          {/* Left - Name and Title */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground tracking-[-0.02em] mb-2">
              DHARSAN D
            </h4>
            <p className="text-sm text-muted-foreground tracking-wide">
              Full Stack Developer
            </p>
          </div>

          {/* Right - Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase">
              Back to top
            </span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-foreground/20">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2024 DHARSAN D. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/dharsand0678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dharsand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/dharsand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
