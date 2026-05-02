/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCards from './components/MenuCards';
import DealsStrip from './components/DealsStrip';
import LoyaltyPromo from './components/LoyaltyPromo';
import SocialProof from './components/SocialProof';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <DealsStrip />
        <MenuCards />
        <LoyaltyPromo />
        <SocialProof />
        <StoreLocator />
      </main>
      <Footer />
    </div>
  );
}
