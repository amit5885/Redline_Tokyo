import React, { useState, useEffect } from "react";
import { Cpu, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenTerminal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "RACE INFO", href: "#about" },
    { name: "LINEUP", href: "#lineup" },
    { name: "TICKETS", href: "#tickets" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-[#FF003C]/30 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-3 h-10 bg-[#FF003C] transform -skew-x-12 group-hover:bg-[#FCEE09] transition-colors"></div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold font-['Syncopate'] tracking-tighter">
              REDLINE
            </span>
            <span className="text-xs tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">
              TOKYO
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest hover:text-[#FF003C] transition-colors relative group overflow-hidden"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[px] bg-[#FF003C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          ))}

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-2 border border-[#333] hover:border-[#FCEE09] hover:text-[#FCEE09] hover:bg-[#FCEE09]/10 transition-all uppercase text-xs font-bold tracking-wider"
          >
            <Cpu size={14} />
            <span>System Link</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-[#333] py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold tracking-widest hover:text-[#FF003C]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onOpenTerminal();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-[#FCEE09] uppercase text-sm font-bold tracking-wider mt-2"
          >
            <Cpu size={16} />
            <span>Access Mainframe</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

