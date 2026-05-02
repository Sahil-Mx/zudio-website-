import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      {/* Abstract geometric background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            Unlock Member Perks
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6">
            Get 10% Off Your First Order
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Sign up for the newsletter and receive exclusive access to early drops, styling tips, and members-only flash sales.
          </p>

          {subscribed ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 border border-white/20 p-6 inline-block backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-2">Welcome to the Club!</h3>
              <p className="text-gray-300 text-sm">Check your inbox for your 10% off code.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                required
                className="flex-1 bg-transparent border-b border-gray-600 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors tracking-widest text-sm"
              />
              <button 
                type="submit"
                className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap group"
              >
                Join Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          
          <p className="text-xs text-gray-600 mt-6 tracking-wide">
            By signing up, you agree to our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
