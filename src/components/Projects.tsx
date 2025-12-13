import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-card">
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
            Featured Projects
          </h2>
          <span className="text-xs font-mono text-muted-foreground">(0)</span>
        </motion.div>

        {/* Coming Soon - Large typography style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tighter mb-8">
            <span className="text-outline block">PROJECTS</span>
            <span className="block">COMING SOON</span>
          </h3>
          
          <p className="max-w-md text-muted-foreground leading-relaxed mt-8">
            I'm currently working on some exciting projects! As a 2nd year student, 
            I'm building my portfolio with innovative applications using my diverse tech stack.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["React", "Node.js", "Python", "MongoDB", "FastAPI"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono tracking-wider text-muted-foreground border border-border px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 mt-12">
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              In Progress
            </span>
          </div>
        </motion.div>

        {/* Placeholder project slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-16">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 group cursor-pointer hover:bg-secondary/30 transition-colors"
            >
              <div className="aspect-video bg-secondary/50 mb-6 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
              </div>
              <div className="h-4 bg-secondary/50 w-3/4 mb-2" />
              <div className="h-3 bg-secondary/30 w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
