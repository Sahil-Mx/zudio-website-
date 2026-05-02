import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function FlashSaleStrip() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-red-600 text-white overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-widest italic group-hover:scale-105 transition-transform origin-left">
              Flash Sale
            </h3>
            <p className="text-sm md:text-base font-bold tracking-wider opacity-90 mt-1">
              FLAT 50% OFF ON SELECTED STYLES
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 mr-2">
              <Clock className="w-5 h-5 animate-pulse text-red-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-200">Ends In</span>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-2xl font-bold">
              <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded">
                {formatTime(timeLeft.hours)}
              </div>
              <span className="text-red-200">:</span>
              <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded">
                {formatTime(timeLeft.minutes)}
              </div>
              <span className="text-red-200">:</span>
              <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded">
                {formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
          
          <a href="#shop-sale" className="bg-white text-red-600 px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
