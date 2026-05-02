import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    author: "Priya S.",
    handle: "@priya_styles",
    rating: 5,
    text: "Obsessed with the new drop! The fit is perfect and the quality is amazing for the price.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    author: "Rahul M.",
    handle: "@rahulm_fits",
    rating: 5,
    text: "Best basic tees I've ever bought. Highly recommend grabbing a few colors.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    author: "Anita R.",
    handle: "@anitaaa",
    rating: 5,
    text: "So happy with the kids collection! Stylish and really comfortable for playing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">Zudio Community</h2>
          <p className="text-gray-500 max-w-xl mx-auto px-4">
            See how our community is styling their favorite looks. Tag us <span className="font-bold text-black">@ZudioStyles</span> to be featured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-8 rounded-none border border-gray-100 relative group"
            >
              <div className="flex text-black mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8 min-h-[80px] italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.author} 
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-sm">{review.author}</h4>
                  <span className="text-xs text-gray-500 font-medium tracking-wider">{review.handle}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-2xl font-black">1M+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-2xl font-black">30</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Day Returns</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-2xl font-black">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Secure Checkout</span>
          </div>
        </div>
      </div>
    </section>
  );
}
