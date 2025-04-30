// 1. Pehle react-helmet-async package install karein
// npm install react-helmet-async

// 2. App.jsx mein update karein

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const WhitePaper = lazy(() => import("./pages/WhitePaper"));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Features = lazy(() => import('./pages/Features'));
const FAQ = lazy(() => import('./pages/FAQ'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const PageLoader = () => (
  <div className="page-loading">
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<WhitePaper />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/features" element={<Features />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;