import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-display font-black text-4xl tracking-tighter uppercase italic text-brand mb-6">KFC</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
              Finger Lickin' Good. 100% genuine chicken, sourced to the highest standards, prepared fresh in-store everyday.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-colors rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-colors rounded-full">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-colors rounded-full">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-colors rounded-full">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-500">Legal</h3>
            <ul className="space-y-4 text-sm text-white/90 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Caution Notice</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-500">KFC India</h3>
            <ul className="space-y-4 text-sm text-white/90 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">About KFC</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">KFC Care</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Our Golden Past</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-500">KFC Food</h3>
            <ul className="space-y-4 text-sm text-white/90 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Order Lookup</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Gift Card</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Nutrition & Allergen</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 font-medium tracking-wide mb-4 md:mb-0">
            © 2026 KFC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium tracking-wide">
            <span>Food shown are for illustration purpose only. Actual product may differ.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
