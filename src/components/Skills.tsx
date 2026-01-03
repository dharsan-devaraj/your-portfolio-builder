import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "C++"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="skills"
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
            (01)
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black uppercase tracking-[-0.04em] leading-[0.9] text-foreground"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            SKILLS
          </motion.h2>
        </div>

        {/* Skills Grid - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground">
                <h3 className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {category.title}
                </h3>
                <span className="text-xs font-medium tracking-[0.1em] text-muted-foreground">
                  0{categoryIndex + 1}
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group/skill"
                  >
                    <span className="text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.02em] group-hover/skill:text-muted-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
