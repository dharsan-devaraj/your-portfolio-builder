import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "Django", "FastAPI"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
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
            Skills & Technologies
          </h2>
          <span className="text-xs font-mono text-muted-foreground">
            ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </span>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-mono text-muted-foreground mb-6 tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-xl md:text-2xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
