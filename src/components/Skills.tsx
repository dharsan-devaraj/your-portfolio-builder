import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "Languages", skills: ["Python", "C++", "JavaScript", "PHP"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Flask", "Django", "FastAPI"] },
  { title: "Databases", skills: ["MySQL", "MongoDB"] },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          style={{ x: headerX, opacity: headerOpacity }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-20"
        >
          <h2 className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
            Skills & Technologies
          </h2>
          <span className="text-xs font-mono text-muted-foreground">
            ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
            >
              <h3 className="text-xs font-mono text-muted-foreground mb-8 tracking-[0.2em] uppercase border-b border-border/50 pb-3">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 4 + skillIndex) * 0.05, duration: 0.5 }}
                  >
                    <motion.span
                      whileHover={{ x: 20, color: "hsl(var(--muted-foreground))" }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl md:text-3xl font-bold tracking-tight cursor-default inline-block text-foreground"
                    >
                      {skill}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <motion.div className="flex items-center gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
            <motion.div 
              className="w-2 h-2 bg-foreground rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.15em]">
              Always learning and exploring new technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
