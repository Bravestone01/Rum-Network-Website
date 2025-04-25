import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import WhitePaper from "./pages/WhitePaper";
import Roadmap from './pages/Roadmap';
import Features from './pages/Features';
import FAQ from './pages/Faq';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<WhitePaper />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

      </Routes>
    </Router>
  );
}

export default App;