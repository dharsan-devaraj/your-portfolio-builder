import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs font-mono text-muted-foreground tracking-wider">
            © 2024 — PRESENT DHARSAN D
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/dharsand0678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Built with */}
          <p className="text-xs font-mono text-muted-foreground tracking-wider">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
