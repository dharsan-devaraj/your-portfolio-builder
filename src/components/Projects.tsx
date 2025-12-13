import { motion } from "framer-motion";
import { Folder, ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey and creations
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-pulse-glow" />
            </div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8"
            >
              <Folder className="w-10 h-10 text-primary" />
            </motion.div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Coming Soon</h3>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm currently working on some exciting projects! As a 2nd year student, 
              I'm building my portfolio with innovative applications using my diverse tech stack.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["React", "Node.js", "Python", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 text-sm rounded-full border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              In Progress
            </div>
          </div>
        </motion.div>

        {/* Future project placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 opacity-40 border-dashed hover:opacity-60 transition-opacity duration-300"
            >
              <div className="w-full h-32 bg-secondary/30 rounded-xl mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <div className="h-4 bg-secondary/50 rounded-full w-3/4 mb-2" />
              <div className="h-3 bg-secondary/30 rounded-full w-1/2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
