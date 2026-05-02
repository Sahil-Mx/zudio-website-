import { motion } from 'motion/react';
import { Smartphone, Download, Star } from 'lucide-react';

export default function LoyaltyPromo() {
  return (
    <section className="bg-[#1A1A1A] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">KFC Club Rewards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 leading-[1.1]">
              Earn points. <br /><span className="text-brand">Get free chicken.</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Download the KFC App and join the Colonel's Club today. Get exclusive deals, skip the line, and earn points on every order.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-brand text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand/90 transition-colors flex items-center justify-center gap-3">
                <Download className="w-5 h-5" /> Download App
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                <Smartphone className="w-5 h-5" /> Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                alt="KFC App on Mobile" 
                className="w-full max-w-md mx-auto h-[600px] object-cover rounded-[3rem] border-[8px] border-black shadow-2xl"
              />
              <div className="absolute top-1/2 -right-8 bg-white text-black p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl">
                  +100
                </div>
                <div>
                  <p className="font-bold text-sm">Bonus Points!</p>
                  <p className="text-xs text-gray-500">On first sign up</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
