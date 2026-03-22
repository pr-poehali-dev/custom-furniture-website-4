import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Configurator from '@/components/Configurator';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-golos">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Configurator />
      <Portfolio />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
