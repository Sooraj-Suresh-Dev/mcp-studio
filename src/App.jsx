import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import LearnSection from './components/LearnSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LearnSection />
      <Footer />
    </div>
  );
}
