import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const menuItems = [
  {
    id: "m1",
    name: "8 PC Hot & Crispy Bucket",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    desc: "8 pieces of signature hot & crispy chicken. Perfect for sharing.",
    tag: "Bestseller"
  },
  {
    id: "m2",
    name: "Zinger Burger Classic",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?q=80&w=800&auto=format&fit=crop",
    desc: "Signature chicken fillet, mayo, and lettuce in a sesame bun."
  },
  {
    id: "m3",
    name: "Popcorn Chicken Large",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1562967914-01efa7e87832?q=80&w=800&auto=format&fit=crop",
    desc: "Bite-sized pieces of 100% chicken breast, fried to perfection.",
    tag: "Most Loved"
  },
  {
    id: "m4",
    name: "Ultimate Savings Meal",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop",
    desc: "4pc Chicken, 4 Wings, 2 Fries, 2 Pepsi. Ultimate value."
  }
];

export default function MenuCards() {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-gray-900">Featured Menu</h2>
            <p className="text-gray-600 mt-2 font-medium">Our most finger lickin' good items.</p>
          </div>
          <a href="#full-menu" className="text-brand font-bold uppercase tracking-widest text-sm hover:underline">View All Menu</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative group"
            >
              {item.tag && (
                <span className="absolute top-4 left-0 bg-brand text-white px-3 py-1 text-xs font-bold uppercase tracking-widest z-10 rounded-r-full shadow-md">
                  {item.tag}
                </span>
              )}
              
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2 leading-tight">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-xl text-gray-900">{item.price}</span>
                  <button className="w-10 h-10 rounded-full bg-red-50 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
