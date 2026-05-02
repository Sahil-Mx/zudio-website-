import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    id: "prod-1",
    name: "Classic Overdyed Tee",
    price: "₹399",
    category: "Men",
    image: "https://images.unsplash.com/photo-1550614000-4b95d4ed7982?q=80&w=600&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: "prod-2",
    name: "Denim Trucker Jacket",
    price: "₹1,299",
    category: "Women",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "prod-3",
    name: "Chunky Platform Sneakers",
    price: "₹899",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "prod-4",
    name: "Oversized Graphic Hoodie",
    price: "₹799",
    category: "Men",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    tag: "Just In"
  }
];

export default function TrendingProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Trending Now</h2>
          <a href="#all" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-colors">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                
                {/* Quick Add Button - Appears on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white text-black font-bold uppercase tracking-wider text-sm py-3 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors shadow-lg shadow-black/10">
                    <ShoppingCart className="w-4 h-4" /> Add to Bag
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{product.category}</span>
                <h3 className="font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
                <span className="font-bold text-lg mt-auto">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
