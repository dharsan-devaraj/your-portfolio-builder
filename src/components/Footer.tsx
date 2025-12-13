import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-gradient">D</span>
              <span className="text-foreground">HARSAN</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 DHARSAN D. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/dharsand0678"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#contact"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
