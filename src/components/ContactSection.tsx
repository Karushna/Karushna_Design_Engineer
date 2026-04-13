import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import contactImg from "@/assets/karushna-contact.jpeg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:karushnajeyakumar01@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Connect</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
              <div className="absolute -inset-3 rounded-full bg-gradient-hero opacity-15 blur-xl" />
              <img
                src={contactImg}
                alt="Karushna Jeyakumar"
                className="relative w-full h-full object-cover rounded-full border-4 border-border/30 shadow-xl"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
              Let's build something impactful together. I'm always open to discussing new projects and creative ideas.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:karushnajeyakumar01@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} className="text-accent" /> karushnajeyakumar01@gmail.com
              </a>
              <a href="https://linkedin.com/in/karushna" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} className="text-accent" /> linkedin.com/in/karushna
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex-1 w-full max-w-lg glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
