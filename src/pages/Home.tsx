import { motion } from 'motion/react';
import { INQUIRIES, PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-40 pb-20">
      {/* Hero Section */}
      <section className="mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-normal tracking-tighter-extra text-primary mb-8"
        >
          Azneef Chowdhury
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="text-secondary text-xl md:text-2xl leading-relaxed font-light mb-12">
            Computer Science and Economics @ Dartmouth.<br />
            Interested in applying AI for social good.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Machine Learning', 'Journalism', 'Labor Economics'].map((tag) => (
              <span 
                key={tag}
                className="bg-surface-container-high px-4 py-1 text-[10px] uppercase tracking-[0.1em] font-medium border border-outline-variant/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Active Inquiries */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Active Inquiries</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary pb-2">Archive Vol. 04</span>
        </div>
        <div className="border-t border-outline-variant/20">
          {INQUIRIES.map((item) => (
            <div 
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 py-8 group hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/10"
            >
              <div className="md:col-span-2 text-[11px] uppercase tracking-[0.15em] text-secondary self-center mb-2 md:mb-0">
                {item.period}
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-normal group-hover:pl-4 transition-all">{item.title}</h3>
                <p className="text-sm text-secondary font-light mt-1 group-hover:pl-4 transition-all">{item.description}</p>
              </div>
              <div className="md:col-span-3 flex justify-end items-center gap-6">
                <button className="text-[10px] uppercase tracking-[0.1em] border border-outline-variant/30 px-3 py-1 hover:bg-primary hover:text-on-primary transition-colors">
                  {item.type}
                </button>
                <a href={item.link} className="flex items-center gap-1 group/link">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-secondary group-hover/link:text-primary transition-colors">pdf</span>
                  <ArrowUpRight className="w-3 h-3 text-secondary group-hover/link:text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section id="projects">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Selected Works</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary pb-2">Archive Index</span>
        </div>
        <div className="border-t border-outline-variant/20">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-12 py-10 group hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/10"
            >
              <div className="md:col-span-2 text-[11px] uppercase tracking-[0.15em] text-secondary self-start pt-1 mb-2 md:mb-0">
                {project.year} / {project.archiveId}
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-normal group-hover:pl-4 transition-all">{project.title}</h3>
                <p className="text-sm text-secondary font-light mt-2 max-w-2xl group-hover:pl-4 transition-all">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-3 flex justify-end items-start gap-6 pt-1">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} className="flex items-center gap-1 group/link">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-secondary group-hover/link:text-primary transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-secondary group-hover/link:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
