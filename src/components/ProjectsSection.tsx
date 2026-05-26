import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack centralized dashboard for managing employee profiles with real-time data updates, role-based access controls, and secure authentication.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "JavaScript"],
    highlights: [
      "Centralized dashboard for viewing, adding & editing employee profiles",
      "Responsive admin interface using CSS Grid and Flexbox",
      "Secure login, role-based access controls & form validation",
    ],
    github: "https://github.com/mohit-kashyap1315",
    live: "#",
    badge: "Full Stack",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    title: "Food Ordering System",
    description:
      "An interactive food ordering frontend with dynamic cart functionality, real-time price updates, and a fully responsive UI designed for all device types.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Flexbox"],
    highlights: [
      "Interactive menu with dynamic cart & real-time price updates",
      "Responsive UI using Flexbox and CSS Grid for all devices",
      "Order form with validation for delivery and payment details",
    ],
    github: "https://github.com/mohit-kashyap1315",
    live: "#",
    badge: "Frontend",
    badgeColor: "bg-accent/15 text-accent border-accent/30",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack productivity app for managing personal and team tasks with priority levels, status tracking, and a clean dashboard interface.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Bootstrap"],
    highlights: [
      "Create, update, delete tasks with priority and deadline tracking",
      "User authentication with JWT-based secure login",
      "Filter & search tasks by status, priority, and due date",
    ],
    github: "https://github.com/mohit-kashyap1315",
    live: "#",
    badge: "Full Stack",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    title: "Student Result Management System",
    description:
      "A web-based system for managing and displaying student results, grade calculations, and performance reports for educational institutions.",
    image: "/images/Student-Result-Management-System.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5"],
    highlights: [
      "Admin panel to add subjects, marks & generate result reports",
      "Automatic grade & percentage calculation per student",
      "Responsive UI with printable result sheet view",
    ],
    github: "https://github.com/mohit-kashyap1315",
    live: "#",
    badge: "Full Stack",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold inline-block relative">
            Featured Projects
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing full-stack MERN development, problem-solving, and clean UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_hsl(var(--primary))] transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                <span className={`absolute top-4 left-4 z-20 text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 md:p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Key Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors ml-auto"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mohit-kashyap1315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/60 text-foreground font-semibold rounded-xl border border-border/60 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_-8px_hsl(var(--primary))] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
