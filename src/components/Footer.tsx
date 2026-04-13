import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-display font-bold text-gradient">KJ</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/karushna" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/Karushna/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="mailto:karushnajeyakumar01@gmail.com" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
