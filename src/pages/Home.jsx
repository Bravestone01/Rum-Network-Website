import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import "../css/Home.css";
import rumimage2 from "../assets/rum2.jpg";
import googleplayimage from "../assets/google play.png";
import miningimage from "../assets/mining.png";
import marketupdateImgae from "../assets/market.png";
import lockicon from "../assets/lock.png";
import visionImage from "../assets/vision.png";
import watchAdsImage from "../assets/watch-ads.png";
import playGamesImage from "../assets/play-games.png";
import convertPointsImage from "../assets/convert-points.png";
import userIcon from "../assets/user-icon.png";
import activeUserIcon from "../assets/active-user-icon.png";

// Lazy load components for better performance
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

// Loading component
const LoadingComponent = () => (
  <div className="loading-component">
    <div className="loading-spinner"></div>
  </div>
);

// Schema.org JSON-LD structured data
const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "RUM Network",
  "description": "Mobile cryptocurrency mining app that allows users to earn crypto through their smartphones.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "15000"
  }
};

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RUM Network",
  "url": "https://rum-network-website.vercel.app/",
  "logo": "https://rum-network-website.vercel.app/logo.png",
  "sameAs": [
    "https://twitter.com/rumnetwork",
    "https://facebook.com/rumnetwork",
    "https://instagram.com/rumnetwork"
  ]
};

const Home = () => {
  return (
    <div className="home">
      {/* Enhanced SEO Metadata */}
      <Helmet>
        <html lang="en" />
        <title>RUM Network – Earn Crypto with Mobile Mining | Best Pi Network Alternative</title>
        <meta name="description" content="Join RUM Network to earn cryptocurrency through mobile mining. Decentralized, eco-friendly, and secure – a proven Pi Network alternative with 150,000+ users." />
        <meta name="keywords" content="RUM Network, crypto mining, earn crypto, mobile mining, decentralized network, Pi Network alternative, cryptocurrency app, mobile crypto mining" />
        <meta name="author" content="RUM Network Team" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://rum-network-website.vercel.app/" />

        {/* Open Graph Meta Tags with enhanced descriptions */}
        <meta property="og:title" content="RUM Network – Mobile Crypto Mining Made Easy | 150,000+ Users" />
        <meta property="og:description" content="Join the RUM Network community of 150,000+ users earning cryptocurrency through mobile mining. Multiple ways to earn – mine, watch ads, play games!" />
        <meta property="og:image" content="https://rum-network-website.vercel.app/og-image.png" />
        <meta property="og:url" content="https://rum-network-website.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RUM Network" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rumnetwork" />
        <meta name="twitter:title" content="RUM Network – Earn Crypto with Mobile Mining" />
        <meta name="twitter:description" content="Join 150,000+ users mining crypto safely on mobile with RUM Network." />
        <meta name="twitter:image" content="https://rum-network-website.vercel.app/og-image.png" />

        {/* Mobile specific */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3498db" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(WebsiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(OrganizationSchema)}
        </script>
      </Helmet>

      {/* Header with Suspense for lazy loading */}
      <Suspense fallback={<LoadingComponent />}>
        <Header />
      </Suspense>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to the <span className="highlight">Rum Network</span>
          </h1>
          <p className="hero-subtitle">
            Unleash the power of Rum Network – where your digital world meets limitless possibilities. 🚀 Secure. Fast. Future-Ready
          </p>
        </div>

        {/* Combined Download and Screenshots Section */}
        <div className="download-screenshot-section">
          <div className="download-side">
            <div className="download-content">
              <h2>Download Rum Network App</h2>
              <p>Get started with our powerful app and begin your journey to financial freedom.</p>
              <div className="download-buttons">
                <a href="https://play.google.com/store/apps/details?id=com.rumnetwork" className="download-button android" aria-label="Download from Google Play">
                  <img src={googleplayimage} alt="Google Play" width="180" height="53" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>

          <div className="screenshots-side">
            <img src={rumimage2} alt="Rum Network App Dashboard Screenshot" className="app-screenshot" width="300" height="600" />
          </div>
        </div>

        {/* Features Preview Section */}
        <section className="features-preview" aria-labelledby="features-heading">
          <h2 id="features-heading" className="section-title">Key <span className="highlight">Features</span></h2>
          <div className="features-container">
            <div className="feature">
              <div className="feature-icon">
                <img src={miningimage} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Mine RUM</h3>
              <p>Earn RUM tokens with our efficient mobile mining system</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src={marketupdateImgae} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Market Updates</h3>
              <p>Stay informed with real-time cryptocurrency market data</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src={lockicon} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Enhanced Security</h3>
              <p>Your assets protected with industry-leading security measures</p>
            </div>
          </div>
        </section>

        {/* Earn More Section */}
        <section className="earn-more-section" aria-labelledby="earn-more-heading">
          <h2 id="earn-more-heading" className="section-title">Earn <span className="highlight">More</span></h2>
          <p className="earn-more-intro">
            Multiple ways to earn Rum Points that you can convert to cryptocurrency
          </p>

          <div className="earning-methods">
            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={watchAdsImage} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Watch Ads</h3>
              <p>Earn Rum Points by watching short advertisements in your spare time</p>
            </div>

            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={playGamesImage} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Play Games</h3>
              <p>Have fun playing games and earn Rum Points while enjoying yourself</p>
            </div>

            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={convertPointsImage} alt="" className="icon-image" width="64" height="64" />
              </div>
              <h3>Convert Points</h3>
              <p>Exchange your earned Rum Points to cryptocurrency of your choice</p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="vision-section" aria-labelledby="vision-heading">
          <div className="vision-content">
            <h2 id="vision-heading" className="section-title">Our <span className="highlight">Vision</span></h2>
            <div className="vision-container">
              <div className="vision-text">
                <p className="vision-description">
                  Our vision is to create a comprehensive platform that empowers users with every possible facility to earn online. We believe that financial freedom should be accessible to everyone, regardless of their background or location. The Rum Network aims to break down barriers to entry in the digital economy and provide intuitive tools that make online earning simple, secure, and rewarding.
                </p>
                <p className="vision-description">
                  By combining cryptocurrency mining, market insights, and cutting-edge security, we're building an ecosystem where users can confidently explore various income streams in the digital world. Our commitment is to continuously innovate and expand our offerings, ensuring that Rum Network remains at the forefront of the decentralized financial revolution.
                </p>
              </div>
              <div className="vision-image-container">
                <img src={visionImage} alt="RUM Network Vision Illustration" className="vision-image" width="450" height="300" />
              </div>
            </div>
          </div>
        </section>

        {/* User Stats Section */}
        <section className="user-stats-section" aria-labelledby="community-heading">
          <div className="stats-content">
            <h2 id="community-heading" className="section-title">Our <span className="highlight">Community</span></h2>
            <p className="stats-intro">
              Join thousands of users already benefiting from the Rum Network ecosystem
            </p>

            <div className="stats-counters">
              <div className="stat-card">
                <div className="stat-icon">
                  <img src={userIcon} alt="" className="icon-image" width="48" height="48" />
                </div>
                <div className="stat-numbers">
                  <span className="stat-value">150,000+</span>
                  <span className="stat-label">Total Users</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <img src={activeUserIcon} alt="" className="icon-image" width="48" height="48" />
                </div>
                <div className="stat-numbers">
                  <span className="stat-value">72,500+</span>
                  <span className="stat-label">Active Daily Users</span>
                </div>
              </div>
            </div>

            <a href="https://play.google.com/store/apps/details?id=com.rumnetwork" className="join-community-button" aria-label="Download App and Join RUM Network Community">
              Download App & Join
            </a>
          </div>
        </section>

      </main>

      {/* Footer with Suspense for lazy loading */}
      <Suspense fallback={<LoadingComponent />}>
        <Footer />
      </Suspense>

    </div>
  );
};

export default Home;