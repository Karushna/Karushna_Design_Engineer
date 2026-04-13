import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Design System & Component Library",
    overview: "Built a comprehensive, scalable design system powering 12+ products across the organization.",
    problem: "Inconsistent UI patterns across teams led to fragmented user experiences and slow development cycles.",
    solution: "Created a token-based design system with 80+ accessible components, documentation site, and automated visual regression testing.",
    tech: ["React", "TypeScript", "Storybook", "Figma", "Tailwind CSS"],
    impact: "60% faster feature delivery, 40% fewer design-related bugs, adopted by 8 engineering teams.",
    color: "from-primary to-accent",
  },
  {
    title: "High-Performance Marketing Platform",
    overview: "Redesigned and rebuilt a marketing website achieving a 98 Lighthouse performance score.",
    problem: "Legacy site had 6s load times, poor SEO rankings, and a 70% bounce rate on mobile.",
    solution: "Implemented SSR with Next.js, optimized images with lazy loading, and created fluid animations with Framer Motion.",
    tech: ["Next.js", "Framer Motion", "Vercel", "Sanity CMS"],
    impact: "98 Lighthouse score, 3x organic traffic increase, 45% lower bounce rate.",
    color: "from-accent to-primary",
  },
  {
    title: "Enterprise React Web Application",
    overview: "Led front-end architecture for a complex SaaS dashboard used by 50K+ monthly active users.",
    problem: "The existing Angular app was slow, hard to maintain, and lacked accessibility compliance.",
    solution: "Migrated to React with modular architecture, implemented real-time data visualization, and achieved WCAG 2.1 AA compliance.",
    tech: ["React", "Redux Toolkit", "D3.js", "Jest", "Cypress"],
    impact: "50K+ MAU, 99.9% uptime, WCAG 2.1 AA certified, 30% faster page interactions.",
    color: "from-primary via-purple-500 to-accent",
  },
  {
    title: "Brand Identity & UI Transformation",
    overview: "Complete rebrand and UI overhaul for a fintech startup entering Series B.",
    problem: "Outdated visual identity failed to convey trust and innovation to enterprise clients.",
    solution: "Developed a modern brand system with a refined color palette, typography, and motion design language.",
    tech: ["Figma", "After Effects", "React", "Tailwind CSS", "GSAP"],
    impact: "2x increase in enterprise leads, 35% improvement in user trust scores.",
    color: "from-accent via-teal-400 to-primary",
  },
  {
    title: "Front-End Performance Initiative",
    overview: "Spearheaded a company-wide performance optimization initiative reducing bundle sizes by 65%.",
    problem: "Multiple products suffered from large bundles, slow hydration, and poor Core Web Vitals.",
    solution: "Implemented code splitting, tree shaking, image optimization pipelines, and established performance budgets.",
    tech: ["Webpack", "Vite", "Lighthouse CI", "Web Vitals", "React"],
    impact: "65% smaller bundles, 40% faster LCP, all products above 90 Lighthouse performance.",
    color: "from-primary to-indigo-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Selected <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 lg:p-10 hover:shadow-glow transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className={`inline-block h-1 w-12 rounded-full bg-gradient-to-r ${project.color} mb-4`} />
                  <h3 className="text-xl lg:text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.overview}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">Problem</span>
                      <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">Solution</span>
                      <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-accent">{project.impact}</p>
                </div>

                <div className="flex flex-col gap-3 lg:justify-end lg:items-end">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> Source Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:gap-3">
                    Case Study <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
