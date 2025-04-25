import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />
      
      <main>
        {/* Hero section */}
        <div className="privacy-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Effective Date: March 26, 2025 (Beta Version)</p>
          </div>
        </div>

        <div className="privacy-container container">
          <div className="privacy-intro">
            <h2>Your Privacy Matters</h2>
            <p>
              Welcome to RUM Network! Your privacy is our top priority. This Privacy Policy outlines how we collect, 
              use, protect, and manage your personal data when you use our crypto mining application.
            </p>
          </div>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2 className="section-title">1. Introduction</h2>
              <div className="section-content">
                <p>
                  Welcome to RUM Network! Your privacy is our top priority. This Privacy Policy outlines how we collect, use, protect, and manage your personal data when you use our crypto mining application.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">2. Information We Collect</h2>
              <div className="section-content">
                <ul className="policy-list">
                  <li><strong>Email Address</strong> – For authentication and KYC.</li>
                  <li><strong>Mining Activity Data</strong> – For wallet tracking.</li>
                  <li><strong>Wallet Address</strong> – For airdrop/transactions.</li>
                  <li><strong>Device Info</strong> – For security and performance.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">3. How We Use Your Data</h2>
              <div className="section-content">
                <ul className="policy-list">
                  <li>Authentication via Google and Facebook</li>
                  <li>User verification</li>
                  <li>Mining balance updates</li>
                  <li>Airdrop processing</li>
                  <li>App security & performance</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">4. Advertisements</h2>
              <div className="section-content">
                <p>
                  We display advertisements to support the development of the RUM Network platform. Ad data is processed 
                  according to our advertising partners' privacy policies. You may see personalized ads based on your 
                  app usage and general demographics.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">5. Data Sharing & Third-Party Services</h2>
              <div className="section-content">
                <ul className="policy-list">
                  <li><strong>Authentication:</strong> Google & Facebook</li>
                  <li><strong>Database:</strong> MongoDB</li>
                  <li><strong>Transactions:</strong> Manual airdrop</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">6. Data Security Measures</h2>
              <div className="section-content">
                <p>
                  We use industry-standard security measures including encryption, access control, and audits.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">7. Your Rights & Choices</h2>
              <div className="section-content">
                <ul className="policy-list">
                  <li>Access your data</li>
                  <li>Request changes or deletion</li>
                  <li>Opt-out and delete account</li>
                  <li>Contact us with concerns</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">8. Updates to This Policy</h2>
              <div className="section-content">
                <p>
                  We'll notify users via the app for any significant changes to this policy.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">9. KYC Policy</h2>
              <div className="section-content">
                <p>
                  KYC will start once we reach 100,000 users. Until then, it's inactive.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="section-title">10. Contact Information</h2>
              <div className="section-content">
                <p>
                  Email us at: <a href="mailto:official.rum.network@gmail.com">official.rum.network@gmail.com</a>
                </p>
              </div>
            </section>
          </div>

          <div className="privacy-disclaimer">
            <p>
              <strong>Note:</strong> This privacy policy applies to the beta version of RUM Network and may be updated as our service evolves.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;