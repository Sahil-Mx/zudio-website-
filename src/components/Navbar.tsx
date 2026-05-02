import { motion } from 'motion/react';
import { Menu, X, ShoppingBag, MapPin, User, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      {/* Top Utility Bar - Progress to Free Delivery */}
      <div className="bg-brand text-white text-xs py-2 font-medium text-center tracking-wide">
        <span className="opacity-90">Add ₹201 to cart for</span> <span className="font-bold underline decoration-white/50">FREE DELIVERY</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center pr-8">
            <span className="font-display font-black text-4xl italic text-brand tracking-tighter">KFC</span>
          </div>

          {/* Delivery Toggle & Locator (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200">
              <button 
                onClick={() => setOrderType('delivery')}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${orderType === 'delivery' ? 'bg-white text-brand border border-gray-200' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Delivery
              </button>
              <button 
                onClick={() => setOrderType('takeaway')}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${orderType === 'takeaway' ? 'bg-white text-brand border border-gray-200' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Takeaway
              </button>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-full transition-colors group">
              <MapPin className="w-5 h-5 text-brand" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{orderType === 'delivery' ? 'Deliver to' : 'Pick up from'}</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1">Select Location <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" /></span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Right */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#menu" className="text-sm font-bold uppercase tracking-wider hover:text-brand transition-colors text-gray-800">Menu</a>
            <a href="#deals" className="text-sm font-bold uppercase tracking-wider hover:text-brand transition-colors text-gray-800">Deals</a>
            <button className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-brand transition-colors">
              <User className="w-5 h-5" /> Sign In
            </button>
            <button className="flex items-center gap-3 bg-brand text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-brand/90 transition-colors">
              <ShoppingBag className="w-5 h-5" /> 
              <span>₹0</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="relative text-gray-800 bg-gray-100 p-2 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 p-1">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-gray-200 absolute top-full left-0 right-0 shadow-xl"
        >
          <div className="p-4 border-b border-gray-100 bg-gray-50 flex gap-2">
            <button 
              onClick={() => setOrderType('delivery')}
              className={`flex-1 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${orderType === 'delivery' ? 'bg-white text-brand border border-gray-200' : 'text-gray-500 border border-transparent'}`}
            >
              Delivery
            </button>
            <button 
              onClick={() => setOrderType('takeaway')}
              className={`flex-1 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${orderType === 'takeaway' ? 'bg-white text-brand border border-gray-200' : 'text-gray-500 border border-transparent'}`}
            >
              Takeaway
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-white">
             <MapPin className="w-6 h-6 text-brand" />
             <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{orderType === 'delivery' ? 'Deliver to' : 'Pick up from'}</span>
                <span className="text-base font-bold text-brand">Add location for accurate pricing</span>
             </div>
          </div>
          
          <div className="px-4 py-4 flex flex-col space-y-4 font-display text-xl font-bold uppercase tracking-wide">
            <a href="#menu" className="border-b border-gray-50 pb-4 flex justify-between" onClick={() => setIsOpen(false)}>Menu <ChevronDown className="w-5 h-5 -rotate-90"/></a>
            <a href="#deals" className="border-b border-gray-50 pb-4 flex justify-between text-brand" onClick={() => setIsOpen(false)}>Offers & Deals <ChevronDown className="w-5 h-5 -rotate-90 text-gray-400"/></a>
            <a href="#kfc-club" className="border-b border-gray-50 pb-4 flex justify-between" onClick={() => setIsOpen(false)}>KFC Club <ChevronDown className="w-5 h-5 -rotate-90 text-gray-400"/></a>
          </div>
          <div className="p-4 bg-gray-50 flex justify-between items-center text-sm font-bold text-gray-600">
             <button className="flex items-center gap-2"><User className="w-4 h-4"/> Sign In / Register</button>
             <button className="flex items-center gap-2"><Search className="w-4 h-4"/> Search</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
