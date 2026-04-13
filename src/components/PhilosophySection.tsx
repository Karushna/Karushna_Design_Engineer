import { motion } from "framer-motion";
import { Eye, Zap, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Clarity",
    description: "Simple, intuitive, and user-centered solutions. Every element serves a purpose, every interaction feels natural.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast, scalable, and optimized experiences. I obsess over Core Web Vitals and deliver buttery-smooth interactions.",
  },
  {
    icon: Sparkles,
    title: "Elegance",
    description: "Harmonious balance between aesthetics and functionality. Beautiful design that works flawlessly under the hood.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Approach</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Design <span className="text-gradient">Philosophy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                <p.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
