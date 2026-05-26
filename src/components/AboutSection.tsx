import { motion } from "framer-motion";
import { User, Code, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { icon: <Briefcase className="w-6 h-6 text-primary" />, value: "1+", label: "Year Experience" },
  { icon: <Code className="w-6 h-6 text-accent" />, value: "11+", label: "Projects Built" },
  { icon: <GraduationCap className="w-6 h-6 text-primary" />, value: "7+", label: "Certifications" },
  { icon: <User className="w-6 h-6 text-accent" />, value: "MERN", label: "Stack Expert" },
];

const education = [
  {
    degree: "Bachelor of Technology (CSE)",
    institution: "B.N. College of Engineering & Technology, Lucknow (AKTU)",
    year: "Pursuing, 2026",
  },
  {
    degree: "Intermediate (80.8%)",
    institution: "Board of High School & Intermediate Education, U.P. Prayagraj",
    year: "2021",
  },
  {
    degree: "High School (78.33%)",
    institution: "Board of High School & Intermediate Education, U.P. Prayagraj",
    year: "2019",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 md:order-1"
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-foreground">
                Passionate about crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  full-stack
                </span>{" "}
                web experiences.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <strong className="text-foreground">Mohit Kashyap</strong>, a MERN Full Stack Developer based in Khatauli, Muzaffarnagar. I specialize in building dynamic, responsive web applications with modern JavaScript technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I have hands-on experience from my internship at <strong className="text-foreground">APTRON NOIDA</strong> as a MERN Stack Web Developer Intern (June–November 2025), where I built real-world projects and strengthened my full-stack skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My objective is to enhance my professional skills in an organization that recognizes hard work and provides challenging responsibilities.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="pl-4 border-l-2 border-primary/40 hover:border-primary transition-colors duration-300"
                  >
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-accent font-medium mt-1">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 md:order-2"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.png`}
              alt="Mohit Kashyap"
              className="w-40 h-40 rounded-full border-2 border-primary/50 object-cover shadow-[0_0_30px_-5px_hsl(var(--primary))] mx-auto"
            />

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="bg-card p-6 rounded-2xl border border-border/50 shadow-lg hover:border-primary/50 hover:shadow-[0_0_25px_-10px_hsl(var(--primary))] transition-all duration-300 flex flex-col items-center text-center gap-4"
                >
                  <div className="p-3 bg-secondary rounded-xl">{stat.icon}</div>
                  <div>
                    <h4 className="text-3xl font-black text-foreground">{stat.value}</h4>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">APTRON NOIDA</span>
              </div>
              <p className="text-sm text-accent font-medium">MERN Stack Web Developer Intern</p>
              <p className="text-xs text-muted-foreground mt-1">June 2025 – November 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
