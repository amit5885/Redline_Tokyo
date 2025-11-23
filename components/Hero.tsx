import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop"
          alt="Tokyo Night"
          className="w-full h-full object-cover opacity-40 grayscale-[50%] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-2 py-1 bg-[#FF003C] text-black font-bold text-xs tracking-[0.2em] transform -skew-x-12">
                INCOMING SIGNAL
              </span>
              <span className="text-[#FCEE09] text-xs tracking-[0.2em] animate-pulse">
                /// LIVE FEED ESTABLISHED
              </span>
            </div>

            <h1 className="text-[12vw] leading-[0.8] font-bold font-['Syncopate'] tracking-tighter text-white mix-blend-difference uppercase">
              <span className="block glitch-text" data-text="REDLINE">
                REDLINE
              </span>
              <span className="block text-transparent text-stroke-red ml-[10vw] glitch-subtle">
                Tokyo
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-end justify-between mt-12 gap-8 border-t border-white/20 pt-8">
              <div className="max-w-md">
                <p className="text-gray-400 text-lg leading-relaxed">
                  The ultimate underground racing tournament returns to the
                  streets of Neo-Tokyo. No rules. No limits. Just pure velocity.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex items-center justify-between md:justify-end gap-8 text-sm font-mono text-gray-500">
                  <span>LOC: SECTOR 7</span>
                  <span>TEMP: 28°C</span>
                  <span>HUM: 82%</span>
                </div>
                <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden hover:bg-[#FCEE09] transition-colors">
                  <span className="relative z-10 flex items-center gap-2">
                    Secure Tickets{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#FF003C]"></div>
      <div className="absolute bottom-4 right-6 flex flex-col gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white/30 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

