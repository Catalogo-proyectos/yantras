import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import Hero3D from './components/Hero3D';
import ParticlesBg from './components/ParticlesBg';
import { Component as EtherealShadow } from './components/ui/etheral-shadow';

// Below-the-fold components — lazy loaded for faster initial paint
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const CollectionGrid = lazy(() => import('./components/CollectionGrid'));
const InfiniteCarousel = lazy(() => import('./components/InfiniteCarousel'));
const BestsellersRow = lazy(() => import('./components/BestsellersRow'));
const Editorial = lazy(() => import('./components/Editorial'));
const TrustBadges = lazy(() => import('./components/TrustBadges'));
const GiftSection = lazy(() => import('./components/GiftSection'));
const PromoBanner = lazy(() => import('./components/PromoBanner'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  return (
    <>
      <div className="global-bg-container">
        <ParticlesBg />
        <EtherealShadow
          title=""
          color="rgba(201, 168, 76, 0.15)"
          animation={{ scale: 50, speed: 45 }}
          noise={{ opacity: 0.35, scale: 0.8 }}
          sizing="fill"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        />
      </div>

      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero3D />
        <Suspense fallback={null}>
          <PhilosophySection />
          <CollectionGrid />
          <InfiniteCarousel />
          <BestsellersRow />
          <Editorial />
          <TrustBadges />
          <GiftSection />
          <PromoBanner />
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
