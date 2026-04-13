import { motion } from "framer-motion";
import { Download } from "lucide-react";
import aboutImg from "@/assets/karushna-about.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-hero opacity-10 blur-xl" />
              <img
                src={aboutImg}
                alt="Karushna Jeyakumar presenting"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-border/30"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Karushna Jeyakumar, a Senior Design Engineer passionate about crafting seamless digital experiences. I specialize in merging design and engineering to build scalable, accessible, and high-performing web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My work is driven by curiosity, creativity, and a commitment to delivering meaningful impact through thoughtful design and clean code. I believe the best digital products emerge when design thinking meets engineering rigor.
            </p>
            <a
              href="/Karushna_Jeyakumar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
