import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const charVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const line1 = "PROJECTS";
  const line2 = "COMING SOON";

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative bg-card overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
          style={{ x: titleX, opacity: titleOpacity }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-16"
        >
          <h2 className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default">
            Featured Projects
          </h2>
          <span className="text-[10px] font-mono text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-default">(0)</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-16">
          <h3 className="text-[clamp(2rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.03em] mb-6 overflow-hidden">
            <span className="block text-muted-foreground/30">
              {line1.split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  custom={i} 
                  variants={charVariants} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  className="inline-block hover:text-muted-foreground/50 transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block text-muted-foreground/50">
              {line2.split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  custom={i + line1.length} 
                  variants={charVariants} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  className="inline-block hover:text-muted-foreground/70 transition-colors duration-300"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h3>
          
          <motion.p 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.5, duration: 0.6 }} 
            className="max-w-md text-muted-foreground/50 leading-relaxed text-sm mt-8 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
          >
            I'm currently working on some exciting projects! As a 2nd year student, I'm building my portfolio with innovative full-stack applications.
          </motion.p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["React", "Node.js", "Python", "MongoDB", "FastAPI", "Django"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="text-[10px] font-mono tracking-wider text-muted-foreground/50 border border-border/50 px-4 py-2 cursor-default hover:text-muted-foreground hover:border-muted-foreground/50 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 1 }} 
            className="flex items-center gap-3 mt-12"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" 
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} 
              transition={{ duration: 2, repeat: Infinity }} 
            />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default">
              In Progress
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 mt-16">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="bg-card p-6 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video bg-secondary/20 mb-5 flex items-center justify-center border border-border/30">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground/20" />
              </div>
              <div className="h-3 bg-secondary/40 w-3/4 mb-2" />
              <div className="h-2 bg-secondary/20 w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
