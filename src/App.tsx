import { Navbar } from './components/Navbar';
import Hero3D from './components/Hero3D';
import MarqueeStrip from './components/MarqueeStrip';
import CollectionGrid from './components/CollectionGrid';
import PhilosophySection from './components/PhilosophySection';
import InfiniteCarousel from './components/InfiniteCarousel';
import GiftSection from './components/GiftSection';
import { Footer } from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
import { Component as EtherealShadow } from './components/ui/etheral-shadow';

function App() {
  return (
    <>
      {/* ─── Global Background: fixed behind the entire site ─── */}
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
        <MarqueeStrip />
        <CollectionGrid />
        <PhilosophySection />
        <InfiniteCarousel />
        <GiftSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
