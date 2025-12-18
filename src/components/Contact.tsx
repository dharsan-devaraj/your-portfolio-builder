import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("dharsand2006@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "dharsand2006@gmail.com has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  // Character animation for title
  const charVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const line1 = "LET'S WORK";
  const line2 = "TOGETHER";

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.02]"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--foreground)) 0%, transparent 70%)",
        }}
      />

      <div className="container px-6 relative z-10">
        {/* Section header with slide animation */}
        <motion.div
          style={{ x: titleX, opacity: titleOpacity }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-16"
        >
          <h2 className="text-base font-mono tracking-[0.3em] text-muted-foreground/60 uppercase">
            Get In Touch
          </h2>
        </motion.div>

        {/* Full width grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Large CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.85] tracking-[-0.04em] mb-10 overflow-hidden">
              <span className="block">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block text-muted-foreground/50"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-outline">
                {line2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length}
                    variants={charVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h3>
            
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground/60 max-w-sm leading-relaxed mb-10 text-lg"
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>
          </motion.div>

          {/* Right side - Contact info & Terminal */}
          <div className="space-y-8">
            {/* Contact links */}
            <div className="space-y-0">
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={copyEmail}
                whileHover={{ x: 10 }}
                className="w-full flex items-center justify-between py-6 border-b border-border group text-left"
              >
                <span className="text-lg font-mono text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300">
                  dharsand2006@gmail.com
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {copied ? "Copied!" : "Click to copy"}
                  </span>
                  {copied ? (
                    <Check className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300" />
                  )}
                </div>
              </motion.button>
              
              <motion.a
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center justify-between py-6 border-b border-border group"
              >
                <span className="text-lg font-mono text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300">
                  LinkedIn
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-muted-foreground/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center justify-between py-6 border-b border-border"
              >
                <span className="text-lg font-mono text-muted-foreground/60">
                  SRM University, KTR
                </span>
              </motion.div>
            </div>

            {/* Terminal style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="p-6 bg-secondary/30 border border-border font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
              </div>
              <div className="space-y-2 text-muted-foreground/60">
                <p><span className="text-muted-foreground">$</span> whoami</p>
                <p className="pl-4 text-muted-foreground">DHARSAN D - Full Stack Developer</p>
                <p><span className="text-muted-foreground">$</span> current_status</p>
                <p className="pl-4 text-muted-foreground">Open to opportunities ✓</p>
                <p>
                  <span className="text-muted-foreground">$</span> _
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;