import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import Lineup from './components/Lineup';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import { Menu, X, Cpu } from 'lucide-react';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#FF003C] selection:text-white">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
      
      <main className="relative z-10">
        <Hero />
        <Marquee text="NO SPEED LIMITS /// TOKYO UNDERGROUND /// REDLINE /// ADRENALINE RUSH /// " speed={20} direction="left" />
        <AboutSection />
        <Marquee text="RACE START 23:00 /// YELLOWLINE DISENGAGED /// WEAPONS FREE /// " speed={35} direction="right" isOutlined />
        <Lineup />
      </main>

      <Footer />

      {/* Terminal / AI Modal */}
      {isTerminalOpen && (
        <Terminal onClose={() => setIsTerminalOpen(false)} />
      )}
    </div>
  );
}