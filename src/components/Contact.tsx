import { motion, useScroll, useTransform } from "framer-motion";
import { Send, ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("dharsand0678@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "dharsand0678@gmail.com has been copied to clipboard.",
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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const line1 = "LET'S WORK";
  const line2 = "TOGETHER";

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-16"
        >
          <h2 className="text-xs font-mono tracking-wider text-muted-foreground uppercase">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Large CTA with scroll animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter mb-8 overflow-hidden"
            >
              <span className="block">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block"
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
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground max-w-sm leading-relaxed mb-8"
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>

            {/* Contact links */}
            <div className="space-y-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={copyEmail}
                className="w-full flex items-center justify-between py-4 border-b border-border group hover:border-foreground transition-all duration-300 text-left"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  dharsand0678@gmail.com
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {copied ? "Copied!" : "Click to copy"}
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4 text-foreground" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  )}
                </div>
              </motion.button>
              
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border group hover:border-foreground transition-all duration-300"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  LinkedIn
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center justify-between py-4 border-b border-border"
              >
                <span className="text-sm font-mono text-muted-foreground">
                  SRM University, KTR
                </span>
              </motion.div>
            </div>

            {/* Terminal style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 p-6 bg-card border border-border font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-foreground">$</span> whoami</p>
                <p className="pl-4 text-foreground">DHARSAN D - Full Stack Developer</p>
                <p><span className="text-foreground">$</span> current_status</p>
                <p className="pl-4 text-foreground">Open to opportunities ✓</p>
                <p><span className="text-foreground">$</span> _<span className="animate-pulse">|</span></p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  Name
                </label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 min-h-[150px] resize-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn w-full bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background h-14 font-mono text-xs tracking-wider uppercase rounded-none transition-all duration-300"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;