import React from "react";
import { Github } from "./Icons/Github";
import { Twitter } from "./Icons/Twitter";
import { Instagram } from "./Icons/Instagram";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-['Syncopate'] text-white mb-2">
              REDLINE
            </h3>
            <p className="text-gray-500 text-xs tracking-widest">
              OFFICIAL TOURNAMENT SITE
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[#FF003C] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#FF003C] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              target="_blank"
              href="https://github.com/amit5885/Redline_Tokyo"
              className="text-gray-500 hover:text-[#FF003C] transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          <div className="text-center md:text-right text-gray-600 text-xs">
            <p>© 2025 REDLINE COMMITTEE.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
