import React from 'react';

const racers = [
  {
    name: "JP",
    vehicle: "TRANS AM 20000",
    odds: "50:1",
    image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=2000&auto=format&fit=crop" // Yellow Muscle Car
  },
  {
    name: "SONOSHEE",
    vehicle: "CRAB SONOSHEE",
    odds: "5:1",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop" // Futuristic vibe
  },
  {
    name: "TRAVA & SHINKAI",
    vehicle: "SPEED MASTER",
    odds: "12:1",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" // Exotic car
  }
];

const Lineup: React.FC = () => {
  return (
    <section id="lineup" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-6xl font-bold font-['Syncopate'] text-white">
            STARTING <span className="text-transparent text-stroke">GRID</span>
          </h2>
          <span className="font-mono text-[#FCEE09]">/// SEASON 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {racers.map((racer, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="relative h-[400px] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src={racer.image} 
                  alt={racer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0" 
                />
                
                {/* Hover Overlay Info */}
                <div className="absolute inset-0 bg-[#FF003C]/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex flex-col justify-center p-8">
                   <h4 className="font-['Syncopate'] text-2xl font-bold text-black mb-2">{racer.vehicle}</h4>
                   <div className="w-full h-px bg-black mb-4"></div>
                   <p className="font-mono text-black font-bold">ODDS: {racer.odds}</p>
                   <p className="font-mono text-black font-bold">DRIVER: {racer.name}</p>
                </div>

                {/* Default Label */}
                <div className="absolute bottom-0 left-0 z-10 p-6 group-hover:opacity-0 transition-opacity">
                  <h3 className="text-3xl font-bold italic uppercase">{racer.name}</h3>
                  <p className="text-[#FF003C] text-sm font-bold tracking-widest">{racer.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;