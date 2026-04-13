import { motion } from "framer-motion";

const galleryItems = [
  { title: "Dashboard UI", category: "Web App", gradient: "from-primary/20 to-accent/20" },
  { title: "Mobile App Design", category: "UI/UX", gradient: "from-accent/20 to-primary/20" },
  { title: "Design Tokens", category: "Design System", gradient: "from-purple-500/20 to-primary/20" },
  { title: "Marketing Page", category: "Web Design", gradient: "from-primary/20 to-indigo-400/20" },
  { title: "Component Library", category: "Engineering", gradient: "from-accent/20 to-teal-400/20" },
  { title: "Brand Guidelines", category: "Branding", gradient: "from-indigo-400/20 to-accent/20" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Showcase</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Visual <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                <h3 className="text-lg font-display font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity">
                <p className="text-xs font-medium text-muted-foreground">{item.category}</p>
                <h3 className="text-sm font-display font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
