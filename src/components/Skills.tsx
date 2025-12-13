import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "PHP"],
    icon: "{ }",
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
    icon: "</>",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "Django", "FastAPI"],
    icon: "⚡",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: "◈",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // MY EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glow-soft transition-all duration-500 group"
            >
              <div className="text-3xl mb-4 text-primary font-mono">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
