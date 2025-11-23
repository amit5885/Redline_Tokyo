import React from 'react';
import { Crosshair, Zap, Radio, Activity } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-[#FCEE09]" size={32} />,
    title: "Hyper Engines",
    desc: "Class-A modified engines capable of breaking the sound barrier on ground level."
  },
  {
    icon: <Radio className="text-[#FF003C]" size={32} />,
    title: "Live Uplink",
    desc: "Neural connection directly to your driver's vitals and vehicle telemetry."
  },
  {
    icon: <Crosshair className="text-[#00F0FF]" size={32} />,
    title: "Weaponized",
    desc: "Defensive countermeasures authorized for all participants in the Red Zone."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Title */}
          <div className="md:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold font-['Syncopate'] leading-none mb-8">
              THE <br/>
              <span className="text-[#FF003C]">RACE</span>
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every 5 years, the galaxy's most notorious racers gather for the ultimate test of speed and survival. 
              The Robotic Roboworld military has threatened to intervene, but the race must go on.
            </p>
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-2">
                <Activity className="text-[#FF003C] animate-pulse" />
                <span className="font-mono text-sm text-[#FF003C]">STATUS: CRITICAL</span>
              </div>
              <p className="font-mono text-xs text-gray-500">
                WARNING: EXTREME G-FORCE DETECTED IN SECTOR 4. SPECTATOR DISCRETION ADVISED.
              </p>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors group border border-transparent hover:border-[#FF003C]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-xs">0{idx + 1}</span>
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-3 group-hover:text-[#FF003C] transition-colors">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
            
            {/* Image Cell */}
            <div className="bg-[#0a0a0a] relative group overflow-hidden min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2670&auto=format&fit=crop" 
                alt="Car Detail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#FF003C]/20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-['Syncopate'] font-bold text-2xl text-white">MACHINE HEAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;