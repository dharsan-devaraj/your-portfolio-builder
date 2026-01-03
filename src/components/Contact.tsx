import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const copyEmail = () => {
    navigator.clipboard.writeText("dharsand0678@gmail.com");
    setEmailCopied(true);
    toast({
      title: "Email copied",
      description: "dharsand0678@gmail.com copied to clipboard",
    });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-background"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground" />

      <motion.div style={{ opacity }} className="px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-6"
          >
            (03)
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black uppercase tracking-[-0.04em] leading-[0.9] text-foreground"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            CONTACT
          </motion.h2>
        </div>

        {/* Contact Content - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Large CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Let's work together on your next project
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Right - Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="border-t border-foreground pt-6">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                Email
              </span>
              <button
                onClick={copyEmail}
                className="group flex items-center justify-between w-full text-left"
              >
                <span className="text-xl md:text-2xl font-semibold text-foreground tracking-[-0.01em] group-hover:text-muted-foreground transition-colors duration-300">
                  {emailCopied ? "Copied!" : "dharsand0678@gmail.com"}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </button>
            </div>

            {/* LinkedIn */}
            <div className="border-t border-foreground pt-6">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full"
              >
                <span className="text-xl md:text-2xl font-semibold text-foreground tracking-[-0.01em] group-hover:text-muted-foreground transition-colors duration-300">
                  linkedin.com/in/dharsand0678
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </a>
            </div>

            {/* GitHub */}
            <div className="border-t border-foreground pt-6">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                GitHub
              </span>
              <a
                href="https://github.com/dharsand"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full"
              >
                <span className="text-xl md:text-2xl font-semibold text-foreground tracking-[-0.01em] group-hover:text-muted-foreground transition-colors duration-300">
                  github.com/dharsand
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </a>
            </div>

            {/* Location */}
            <div className="border-t border-foreground pt-6">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                Based in
              </span>
              <span className="text-xl md:text-2xl font-semibold text-foreground tracking-[-0.01em]">
                Chennai, India
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
