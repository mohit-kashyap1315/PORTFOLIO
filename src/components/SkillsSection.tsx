import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "CSS Bootstrap", "JavaScript", "React.js", "Responsive Design", "CSS Grid", "Flexbox"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "DSA Basics", "OOPs Concepts"],
  },
  {
    category: "Soft Skills & Tools",
    items: ["Strategic Thinking", "Collaboration", "Client Communication", "Agile Execution", "Git", "Problem Solving"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold inline-block relative">
            Technical Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build complete, production-ready web applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-5 md:p-8 rounded-3xl border border-border hover:border-primary/30 transition-colors duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-border/50 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-secondary text-foreground font-medium rounded-lg border border-border/50 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_-3px_hsl(var(--primary))] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
