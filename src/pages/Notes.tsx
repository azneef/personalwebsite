import { motion } from 'motion/react';
import { NOTE_CATEGORIES } from '../constants';

export default function Notes() {
  return (
    <div className="pt-40 pb-20">
      <header className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-3"
        >
          Notes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[14px] md:text-[15px] text-secondary leading-relaxed max-w-2xl"
        >
          A curated archive of academic explorations, mathematical proofs, and technical documentation. Organized for clarity and rapid retrieval.
        </motion.p>
      </header>

      <div className="space-y-16">
        {NOTE_CATEGORIES.map((category) => (
          <section key={category.name}>
            <h2 className="text-[12px] font-medium text-secondary mb-6 tracking-tight uppercase">
              {category.name}
            </h2>
            <div className="flex flex-col gap-4">
              {category.notes.map((note) => (
                <div 
                  key={note.id}
                  className="grid grid-cols-[100px_30px_1fr_120px_40px] items-baseline text-[13px] group border-b border-outline-variant/5 pb-2"
                >
                  <span className="font-bold text-primary">{note.code}</span>
                  <span className="text-[10px] text-secondary font-light">
                    {note.isGraduate ? 'G' : ''}
                  </span>
                  <span className="text-secondary group-hover:text-primary transition-colors">
                    {note.title}
                  </span>
                  <span className="text-secondary/50 text-right pr-4">
                    {note.term}
                  </span>
                  <a 
                    href={note.link} 
                    className="text-primary/70 hover:text-primary text-right underline underline-offset-2"
                  >
                    pdf
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-32 border-t border-outline-variant/10 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-secondary mb-2">Request Access</h4>
            <p className="text-[13px] text-secondary max-w-sm leading-relaxed">
              For specific physical copies or unlisted academic materials.
            </p>
          </div>
          <a 
            href="mailto:curator@digital.archive"
            className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-5 py-2.5 hover:bg-primary hover:text-on-primary transition-all"
          >
            Contact Archive
          </a>
        </div>
      </section>
    </div>
  );
}
