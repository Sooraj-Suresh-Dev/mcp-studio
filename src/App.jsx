import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Generator from './pages/Generator';
import OptionsSelection from './pages/OptionsSelection';
import ClientConnection from './pages/ClientConnection';
import Validator from './pages/Validator';
import Article from './pages/Article';
import WhatIsMCP from './pages/WhatIsMCP';
import QuickStart from './pages/QuickStart';
import SchemaDesign from './pages/SchemaDesign';
import SecurityAuth from './pages/SecurityAuth';
import ClaudeIntegration from './pages/ClaudeIntegration';
import Troubleshooting from './pages/Troubleshooting';
import InteractiveTutorials from './pages/InteractiveTutorials';
import ExamplesGallery from './pages/ExamplesGallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/what-is-mcp" element={<WhatIsMCP />} />
          <Route path="/learn/quick-start" element={<QuickStart />} />
          <Route path="/learn/schema-patterns" element={<SchemaDesign />} />
          <Route path="/learn/security" element={<SecurityAuth />} />
          <Route path="/learn/claude-integration" element={<ClaudeIntegration />} />
          <Route path="/learn/troubleshooting" element={<Troubleshooting />} />
          <Route path="/interactive-tutorials" element={<InteractiveTutorials />} />
          <Route path="/examples-gallery" element={<ExamplesGallery />} />
          <Route path="/article" element={<Article />} />
          <Route path="/options-selection" element={<OptionsSelection />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/client-connection" element={<ClientConnection />} />
          <Route path="/validator" element={<Validator />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
