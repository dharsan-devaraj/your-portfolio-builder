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
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const line1 = "PROJECTS";
  const line2 = "COMING SOON";

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative bg-card overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
          style={{ x: titleX, opacity: titleOpacity }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-16"
        >
          <h2 className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">Featured Projects</h2>
          <span className="text-xs font-mono text-muted-foreground">(0)</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-20">
          <h3 className="text-[clamp(2.5rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.04em] mb-8 overflow-hidden">
            <span className="text-outline block">
              {line1.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={charVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block text-foreground">
              {line2.split("").map((char, i) => (
                <motion.span key={i} custom={i + line1.length} variants={charVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h3>
          
          <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="max-w-md text-muted-foreground leading-relaxed mt-8">
            I'm currently working on some exciting projects! As a 2nd year student, I'm building my portfolio with innovative full-stack applications.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">
            {["React", "Node.js", "Python", "MongoDB", "FastAPI", "Django"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--foreground))" }}
                className="text-xs font-mono tracking-wider text-muted-foreground border border-border px-5 py-2.5 cursor-default transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} className="flex items-center gap-4 mt-14">
            <motion.div className="w-2 h-2 bg-foreground rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">In Progress</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-20">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card p-8 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video bg-secondary/30 mb-6 flex items-center justify-center border border-border/50">
                <ArrowUpRight className="w-8 h-8 text-muted-foreground/30" />
              </div>
              <div className="h-4 bg-secondary/50 w-3/4 mb-3" />
              <div className="h-3 bg-secondary/30 w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
