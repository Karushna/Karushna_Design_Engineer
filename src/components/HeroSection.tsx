import { motion } from "framer-motion";
import { ArrowDown, Mail, Briefcase, Download } from "lucide-react";
import heroImg from "@/assets/karushna-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
            >
              Senior Design Engineer
            </motion.p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Karushna</span>
              <br />
              Jeyakumar
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Designing scalable, human-centered digital experiences with precision and creativity.
            </p>
            <p className="text-base text-muted-foreground/70 max-w-lg mb-8">
              I craft elegant, high-performance web experiences that blend design and engineering.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
              >
                <Briefcase size={18} />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-medium"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="/Karushna_Jeyakumar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-medium"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20 blur-2xl scale-110" />
              <img
                src={heroImg}
                alt="Karushna Jeyakumar"
                className="relative w-full h-full object-cover rounded-full border-4 border-border/30 shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
