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

  const handleMarqueeClick = () => {
    const subject = encodeURIComponent("Lets work Together!");
    const body = encodeURIComponent("Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can.");
    window.location.href = `mailto:dharsand2006@gmail.com?subject=${subject}&body=${body}`;
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

  const marqueeText = "LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING? — ";

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

          {/* Right side - Marquee CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center"
          >
            <div className="w-full">
              {/* Top line */}
              <div className="border-t border-muted-foreground/30 mb-8" />
              
              {/* Marquee container */}
              <motion.div
                onClick={handleMarqueeClick}
                className="cursor-pointer overflow-hidden py-8 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                >
                  {[...Array(4)].map((_, i) => (
                    <span
                      key={i}
                      className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-[-0.02em] text-muted-foreground group-hover:text-orange-500 transition-colors duration-300 uppercase"
                    >
                      {marqueeText}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Bottom line */}
              <div className="border-b border-muted-foreground/30 mt-8" />
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xs font-mono text-muted-foreground/50 mt-6 text-center uppercase tracking-wider"
              >
                Click to send email
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;