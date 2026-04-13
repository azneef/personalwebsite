import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';

type Tab = 'home' | 'projects' | 'notes';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  // Simple scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleTabChange = (tab: Tab) => {
    if (tab === 'projects') {
      if (activeTab !== 'home') {
        setActiveTab('home');
        // Wait for state update then scroll
        setTimeout(() => {
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('projects');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-grow max-w-[900px] mx-auto px-8 md:px-12 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeTab === 'home' && <Home />}
            {activeTab === 'notes' && <Notes />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
