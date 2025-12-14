import { motion, useScroll, useTransform } from "framer-motion";
import { Send, ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  // Form field animations
  const fieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

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
          <h2 className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left side - Large CTA with character animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.85] tracking-[-0.04em] mb-10 overflow-hidden">
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
            </h3>
            
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground max-w-sm leading-relaxed mb-10"
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>

            {/* Contact links with hover animations */}
            <div className="space-y-0">
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={copyEmail}
                whileHover={{ x: 10 }}
                className="w-full flex items-center justify-between py-5 border-b border-border group text-left"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  dharsand2006@gmail.com
                </span>
                <div className="flex items-center gap-3">
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center justify-between py-5 border-b border-border group"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  LinkedIn
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center justify-between py-5 border-b border-border"
              >
                <span className="text-sm font-mono text-muted-foreground">
                  SRM University, KTR
                </span>
              </motion.div>
            </div>

            {/* Terminal style with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-14 p-6 bg-secondary/30 border border-border font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20 hover:bg-foreground transition-colors" />
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="text-foreground">$</span> whoami</p>
                <p className="pl-4 text-foreground">DHARSAN D - Full Stack Developer</p>
                <p><span className="text-foreground">$</span> current_status</p>
                <p className="pl-4 text-foreground">Open to opportunities ✓</p>
                <p>
                  <span className="text-foreground">$</span> _
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form with field animations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div 
                custom={0}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
                  Name
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 h-14 focus-visible:ring-0 focus-visible:border-foreground transition-colors text-base"
                />
              </motion.div>

              <motion.div 
                custom={1}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 h-14 focus-visible:ring-0 focus-visible:border-foreground transition-colors text-base"
                />
              </motion.div>

              <motion.div 
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
                  Message
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-border border-0 border-b rounded-none px-0 min-h-[180px] resize-none focus-visible:ring-0 focus-visible:border-foreground transition-colors text-base"
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background h-16 font-mono text-xs tracking-[0.2em] uppercase rounded-none transition-all duration-500 overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
