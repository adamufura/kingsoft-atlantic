import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExchangeRatesChart from './components/ExchangeRatesChart';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ExchangeRatesPreview from './components/ExchangeRatesPreview';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExchangeRatesChart />
        <Features />
        <HowItWorks />
        <ExchangeRatesPreview />
        <Benefits />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
