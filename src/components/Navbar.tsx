import { motion } from 'motion/react';
import { Menu, X, ShoppingBag, Search, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      {/* Top utility bar */}
      <div className="bg-black text-white text-xs py-2 text-center tracking-widest uppercase">
        Free shipping on orders over ₹999 | Easy 30-day returns
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display font-bold text-3xl tracking-tighter uppercase">Zudio</span>
          </div>

          {/* Desktop Nav Center */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <a href="#women" className="text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors">Women</a>
            <a href="#men" className="text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors">Men</a>
            <a href="#kids" className="text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors">Kids</a>
            <a href="#beauty" className="text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors">Beauty</a>
            <a href="#sale" className="text-sm font-bold uppercase tracking-wider text-red-600">Sale</a>
          </div>

          {/* Desktop Nav Right (Icons) */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700">
            <button className="hover:text-black transition-colors tooltip flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" title="Store Locator">
              <MapPin className="w-5 h-5" /> Stores
            </button>
            <button className="hover:text-black transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-black transition-colors" aria-label="User Account">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-black transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="relative text-gray-700">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-1">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-gray-100 flex flex-col"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 shadow-lg text-lg font-bold uppercase tracking-wider">
            <a href="#women" className="block py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Women</a>
            <a href="#men" className="block py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Men</a>
            <a href="#kids" className="block py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Kids</a>
            <a href="#beauty" className="block py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Beauty</a>
            <a href="#sale" className="block py-2 border-b border-gray-50 text-red-600" onClick={() => setIsOpen(false)}>Sale</a>
            
            <div className="flex gap-6 pt-4 text-sm text-gray-500">
               <button className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Stores</button>
               <button className="flex items-center gap-2"><User className="w-4 h-4"/> Account</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
