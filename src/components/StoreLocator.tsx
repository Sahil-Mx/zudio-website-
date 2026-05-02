import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function StoreLocator() {
  return (
    <section id="locator" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Form Side */}
          <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="w-12 h-12 bg-red-50 text-brand rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Find Your Nearest KFC</h2>
            <p className="text-gray-500 mb-8 font-medium">Over 500+ restaurants nationwide. Find out if we deliver to your door.</p>
            
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter Postcode or City"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow pl-12 font-medium"
                />
                <MapPin className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <button 
                type="button"
                className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-5 py-4 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Navigation className="w-5 h-5 text-brand" /> Use Current Location
              </button>
              <button 
                type="submit"
                className="w-full bg-brand text-white rounded-xl px-5 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand/90 transition-colors mt-2"
              >
                Search Restaurants
              </button>
            </form>
          </div>
          
          {/* Map Side */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <div className="absolute inset-0 bg-gray-200">
              {/* Fallback pattern for map */}
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ddd_1px,_transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand rounded-full animate-pulse" />
                  <span className="font-bold text-gray-700">Interactive Map Loading...</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
