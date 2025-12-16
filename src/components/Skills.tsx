import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "Languages", skills: ["Python", "C++", "JavaScript", "PHP"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Flask", "Django", "FastAPI"] },
  { title: "Databases", skills: ["MySQL", "MongoDB"] },
];

const roleLines = [
  "BUILDING SCALABLE FULL-STACK WEB APPLICATIONS WITH MODERN FRAMEWORKS",
  "CRAFTING RESPONSIVE & PIXEL-PERFECT USER INTERFACES",
  "DEVELOPING ROBUST & SECURE RESTFUL API ARCHITECTURES",
  "ARCHITECTING EFFICIENT DATABASE SOLUTIONS & DATA MODELS",
  "DELIVERING SEAMLESS & INTUITIVE USER EXPERIENCES",
  "IMPLEMENTING CLEAN CODE & BEST DEVELOPMENT PRACTICES",
  "INTEGRATING THIRD-PARTY SERVICES & CLOUD PLATFORMS",
  "OPTIMIZING PERFORMANCE & APPLICATION SCALABILITY",
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: linesScrollProgress } = useScroll({
    target: linesRef,
    offset: ["start end", "end start"],
  });

  const headerX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Lines sliding in opposite directions - continuous movement throughout scroll
  const line1X = useTransform(linesScrollProgress, [0, 1], [-800, 200]);
  const line2X = useTransform(linesScrollProgress, [0, 1], [800, -200]);
  const line3X = useTransform(linesScrollProgress, [0, 1], [-900, 250]);
  const line4X = useTransform(linesScrollProgress, [0, 1], [900, -250]);
  const line5X = useTransform(linesScrollProgress, [0, 1], [-850, 220]);
  const line6X = useTransform(linesScrollProgress, [0, 1], [850, -220]);
  const line7X = useTransform(linesScrollProgress, [0, 1], [-800, 200]);
  const line8X = useTransform(linesScrollProgress, [0, 1], [800, -200]);
  
  const lineTransforms = [line1X, line2X, line3X, line4X, line5X, line6X, line7X, line8X];

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Role lines section - Full width with partition lines */}
      <div ref={linesRef} className="mb-20 overflow-hidden">
        {roleLines.map((line, index) => (
          <motion.div
            key={index}
            style={{ x: lineTransforms[index] }}
            className="border-b border-muted-foreground/20 group cursor-default"
          >
            <motion.div
              className="py-8 md:py-10 px-4 md:px-8 transition-colors duration-300"
            >
              <motion.p
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-muted-foreground/50 group-hover:text-orange-500 transition-colors duration-300 whitespace-nowrap uppercase tracking-tight"
              >
                {line}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container px-6">
        <motion.div
          style={{ x: headerX, opacity: headerOpacity }}
          className="flex items-baseline justify-between border-b border-border pb-6 mb-20"
        >
          <h2 className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase hover:text-muted-foreground transition-colors duration-300 cursor-default">
            Skills & Technologies
          </h2>
          <span className="text-[10px] font-mono text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-default">
            ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
            >
              <h3 className="text-[10px] font-mono text-muted-foreground/50 mb-8 tracking-[0.2em] uppercase border-b border-border/50 pb-3 hover:text-orange-500 transition-colors duration-300 cursor-default">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 4 + skillIndex) * 0.05, duration: 0.5 }}
                  >
                    <motion.span
                      whileHover={{ x: 15 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl md:text-2xl font-bold tracking-tight cursor-default inline-block text-muted-foreground/50 hover:text-orange-500 transition-colors duration-300"
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
          <motion.div className="flex items-center gap-4" whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
            <motion.div 
              className="w-2 h-2 bg-muted-foreground/50 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] hover:text-muted-foreground transition-colors duration-300 cursor-default uppercase">
              Always learning and exploring new technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
