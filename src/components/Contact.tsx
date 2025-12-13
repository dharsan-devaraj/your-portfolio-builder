import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <section id="contact" className="py-32 relative">
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
          {/* Left side - Large CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1] tracking-tighter mb-8">
              LET'S WORK
              <br />
              <span className="text-outline">TOGETHER</span>
            </h3>
            
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <a
                href="mailto:dharsand0678@gmail.com"
                className="flex items-center justify-between py-4 border-b border-border group hover:border-foreground transition-colors"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  dharsand0678@gmail.com
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/dharsand0678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border group hover:border-foreground transition-colors"
              >
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm font-mono text-muted-foreground">
                  SRM University, KTR
                </span>
              </div>
            </div>

            {/* Terminal style */}
            <div className="mt-12 p-6 bg-card border border-border font-mono text-xs">
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
            </div>
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
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 font-mono text-xs tracking-wider uppercase rounded-none"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
