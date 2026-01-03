import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
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
            (02)
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black uppercase tracking-[-0.04em] leading-[0.9] text-foreground"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            PROJECTS
          </motion.h2>
        </div>

        {/* Coming Soon - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="border-t border-foreground pt-8 mb-12">
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Status
            </span>
          </div>

          <h3
            className="font-bold text-foreground tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Coming Soon
          </h3>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
            Currently working on exciting projects that showcase modern web development,
            creative solutions, and clean architecture. Check back soon.
          </p>

          {/* Tech Stack Preview */}
          <div className="border-t border-foreground pt-8">
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-6">
              Technologies in use
            </span>
            <div className="flex flex-wrap gap-4">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-foreground tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
