import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] mt-[100px] bg-gray-100 flex items-center pt-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
          alt="Fashion models in Zudio style" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4 text-red-500">
            Season Premiere
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-6 uppercase">
            Summer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Vibes.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md font-medium text-gray-200">
            Refresh your wardrobe with our latest everyday essentials. Style that speaks without trying too hard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-10 py-4 uppercase font-bold tracking-widest text-sm hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group">
              Shop Women
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-10 py-4 uppercase font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group">
              Shop Men
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
