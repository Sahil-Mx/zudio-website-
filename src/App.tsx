/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTiles from './components/CategoryTiles';
import TrendingProducts from './components/TrendingProducts';
import FlashSaleStrip from './components/FlashSaleStrip';
import SocialProof from './components/SocialProof';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CategoryTiles />
        <TrendingProducts />
        <FlashSaleStrip />
        <SocialProof />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
