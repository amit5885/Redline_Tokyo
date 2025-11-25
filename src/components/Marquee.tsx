import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  isOutlined?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20, direction = 'left', isOutlined = false }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#FF003C] py-3 border-y border-black z-20">
      <div 
        className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDirection: direction === 'left' ? 'normal' : 'reverse', animationDuration: `${speed}s` }}
      >
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className={`mx-4 text-xl md:text-3xl font-bold font-['Syncopate'] tracking-widest uppercase ${isOutlined ? 'text-transparent text-stroke' : 'text-black'}`}
            style={isOutlined ? { WebkitTextStroke: '1px black' } : {}}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;