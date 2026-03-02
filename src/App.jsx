import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Generator from './pages/Generator';
import OptionsSelection from './pages/OptionsSelection';
import ClientConnection from './pages/ClientConnection';
import Validator from './pages/Validator';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/options-selection" element={<OptionsSelection />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/client-connection" element={<ClientConnection />} />
          <Route path="/validator" element={<Validator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
