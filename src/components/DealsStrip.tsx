import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, ArrowRight } from 'lucide-react';

export default function DealsStrip() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 25,
    seconds: 14
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
    <section id="deals" className="bg-brand py-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-sm font-bold text-xs uppercase tracking-widest mb-2"
            >
              Limited Time Only
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold uppercase tracking-tight">Wednesday Bucket Special</h2>
            <p className="text-lg text-white/90 font-medium mt-1">Get 10 pieces for the price of 6.</p>
          </div>
          
          <div className="flex items-center gap-6 bg-black/20 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-yellow-400" />
              <span className="font-bold uppercase tracking-wider text-sm hidden sm:block">Offer Ends In</span>
            </div>
            
            <div className="flex items-center gap-2 font-display text-2xl tracking-wider">
              <div className="bg-white text-brand w-12 h-14 flex items-center justify-center rounded shadow-inner">
                {formatTime(timeLeft.hours)}
              </div>
              <span className="text-white">:</span>
              <div className="bg-white text-brand w-12 h-14 flex items-center justify-center rounded shadow-inner">
                {formatTime(timeLeft.minutes)}
              </div>
              <span className="text-white">:</span>
              <div className="bg-white text-brand w-12 h-14 flex items-center justify-center rounded shadow-inner">
                {formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
          
          <button className="bg-white text-brand px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shrink-0">
            Grab Deal <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
