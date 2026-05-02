import { motion } from 'motion/react';
import { Clock, Navigation } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[116px] pb-12 lg:pt-[136px] lg:pb-20 bg-black min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2000&auto=format&fit=crop" 
          alt="Crispy Fried Chicken" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-white w-full pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 bg-brand text-white px-3 py-1 rounded-sm font-bold uppercase tracking-widest text-xs mb-6 shadow-md shadow-brand/20">
             New Menu Item
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1] tracking-tighter mb-6 uppercase">
            Kentucky <span className="text-brand italic">Spicy</span> <br/>
            Chicken.
          </h1>
          <p className="text-lg lg:text-xl font-medium text-gray-300 mb-8 leading-relaxed">
            100% real chicken breast, marinated in our secret mix of 11 herbs and spices, double coated for maximum crunch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-brand text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-brand/20">
              Start Order
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              View Menu
            </button>
          </div>
          
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-max">
            <div className="bg-white/10 p-2 rounded-full">
              <Clock className="w-5 h-5 text-brand" />
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">Live Delivery Time</span>
              <span className="block font-bold text-white"><span className="text-brand">30-45</span> mins to your location</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:block lg:w-1/2"
        >
           {/* Add a floating element like a bucket to add depth, replacing standard hero image block */}
           <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop" 
                alt="Bucket of Chicken" 
                className="w-full h-auto aspect-square object-cover rounded-full border-[12px] border-black/30 shadow-[0_0_80px_rgba(228,0,43,0.3)] animate-[pulse_4s_ease-in-out_infinite]" />
        </motion.div>
      </div>
      
      {/* Progress to Free Delivery - Fixed at bottom left for quick upsell view */}
      <div className="hidden lg:block absolute bottom-8 right-8 bg-white text-black p-4 rounded-2xl shadow-2xl max-w-[280px]">
          <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">Free Delivery</h4>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div className="bg-brand h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-xs text-gray-500 font-medium">Add <span className="font-bold text-brand">₹201</span> to get free delivery on your order.</p>
      </div>
    </section>
  );
}
