import { motion } from 'motion/react';

interface NavbarProps {
  activeTab: 'home' | 'projects' | 'notes';
  onTabChange: (tab: 'home' | 'projects' | 'notes') => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 w-full max-w-[900px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary cursor-pointer"
          onClick={() => onTabChange('home')}
        >
          Azneef Chowdhury
        </motion.div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-light tracking-tight text-[11px] uppercase">
            <button 
              onClick={() => onTabChange('home')}
              className={`transition-colors cursor-pointer ${activeTab === 'home' ? 'text-primary border-b border-primary pb-0.5' : 'text-secondary hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onTabChange('projects')}
              className={`transition-colors cursor-pointer ${activeTab === 'projects' ? 'text-primary border-b border-primary pb-0.5' : 'text-secondary hover:text-primary'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => onTabChange('notes')}
              className={`transition-colors cursor-pointer ${activeTab === 'notes' ? 'text-primary border-b border-primary pb-0.5' : 'text-secondary hover:text-primary'}`}
            >
              Notes
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
