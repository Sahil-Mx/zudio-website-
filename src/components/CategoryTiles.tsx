import { motion } from 'motion/react';

const categories = [
  {
    title: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    link: "#men"
  },
  {
    title: "Women",
    image: "https://images.unsplash.com/photo-1434389670869-c87520f4f16d?q=80&w=600&auto=format&fit=crop",
    link: "#women"
  },
  {
    title: "Kids",
    image: "https://images.unsplash.com/photo-1519238396593-6e3e5b3f2717?q=80&w=600&auto=format&fit=crop",
    link: "#kids"
  },
  {
    title: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=600&auto=format&fit=crop",
    link: "#beauty"
  }
];

export default function CategoryTiles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, idx) => (
            <motion.a
              href={category.link}
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={`${category.title} Category`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-x-0 bottom-6 md:bottom-10 flex flex-col items-center">
                <span className="bg-white/90 backdrop-blur-sm text-black px-8 py-3 text-sm md:text-base font-bold uppercase tracking-widest min-w-[120px] text-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {category.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
