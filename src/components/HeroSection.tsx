import { motion } from "framer-motion";
import { ArrowRight, Terminal, Github, Linkedin, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Tech Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[28vw] h-[28vw] bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[28vw] h-[28vw] bg-accent/15 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-10 relative z-10">

        {/* ── Text Content ── */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 text-sm font-medium text-muted-foreground"
          >
            <Terminal className="w-4 h-4 text-accent" />
            <span>Open to Work · 1+ Year Experience</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-foreground"
          >
            Mohit <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kashyap</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient"
          >
            MERN Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Passionate about building responsive, full-stack web applications using
            <span className="text-foreground font-medium"> MongoDB, Express.js, React.js &amp; Node.js</span>.
            Turning ideas into reality with clean code and modern UI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="group w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_-8px_hsl(var(--primary))] hover:shadow-[0_0_35px_-4px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-secondary/50 text-foreground border border-border/60 hover:bg-secondary font-semibold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex items-center gap-5 pt-1 justify-center md:justify-start"
          >
            <a
              href="https://github.com/mohit-kashyap1315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <span className="text-border/60">|</span>
            <a
              href="https://www.linkedin.com/in/mohit-kashyap-05418a260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <span className="text-border/60">|</span>
            <a
              href="https://www.instahyre.com/candidate/profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> InstaHyre
            </a>
          </motion.div>
        </div>

        {/* ── Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex-1 hidden lg:flex justify-end relative"
        >
          <div className="relative w-72 h-72 xl:w-88 xl:h-88">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-25" />
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.png`}
              alt="Mohit Kashyap"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-border/50 shadow-2xl"
            />
            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-8 -left-12 bg-background/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border/50 shadow-lg flex items-center gap-2.5 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="font-semibold text-sm">React.js Dev</span>
            </motion.div>
            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-8 -right-8 bg-background/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border/50 shadow-lg flex items-center gap-2.5 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
              <span className="font-semibold text-sm">MERN Stack</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
