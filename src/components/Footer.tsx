import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-display font-black text-3xl tracking-tighter uppercase mb-6">Zudio</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Fashion that speaks for itself. Discover everyday style fundamentals for men, women, and kids at irresistible prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors rounded-none">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors rounded-none">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors rounded-none">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors rounded-none">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Kids</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Beauty</a></li>
              <li><a href="#" className="text-red-600 hover:text-black transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Corporate Governance</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-medium tracking-wide mb-4 md:mb-0">
            © 2026 Zudio E-Commerce. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium tracking-wide">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
