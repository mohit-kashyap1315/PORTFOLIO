import { Github, Linkedin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <span className="font-display font-bold text-xl tracking-tight block mb-1">
            Mohit<span className="text-primary">Kashyap</span>
          </span>
          <p className="text-sm text-muted-foreground">MERN Full Stack Developer</p>
          <p className="text-xs text-muted-foreground mt-1">© {currentYear} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground font-medium">
          Built with <Heart className="w-4 h-4 text-destructive mx-1 fill-destructive animate-pulse" /> using React &amp; Express
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mohit-kashyap1315"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-kashyap-05418a260"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instahyre.com/candidate/profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300 flex items-center gap-1 text-xs font-medium"
            aria-label="InstaHyre"
          >
            <ExternalLink className="w-4 h-4" />
            InstaHyre
          </a>
        </div>

      </div>
    </footer>
  );
}
