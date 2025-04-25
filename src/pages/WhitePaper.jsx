import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/WhitePaper.css";
import rumLogo from "../assets/logo_resized.png"; 
import downloadIcon from "../assets/download-icon.png"; 
import shareIcon from "../assets/share-icon.png"; 
import securityIcon from "../assets/security-icon.png"; 
import miningIcon from "../assets/mining.png"; 
import walletIcon from "../assets/wallet-icon.png"; 
import pointsIcon from "../assets/points-icon.png"; 
import referralIcon from "../assets/referral-icon.png"; 

const WhitePaper = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarSticky, setIsSidebarSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSidebarSticky(true);
      } else {
        setIsSidebarSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="whitepaper-container">
      <Header />
      
      <div className="whitepaper-hero">
        <div className="whitepaper-hero-overlay"></div>
        <div className="whitepaper-hero-content">
          <img src={rumLogo} alt="Rum Network Logo" className="whitepaper-logo" />
          <h1>RUM NETWORK <span className="highlight">WHITE PAPER</span></h1>
          <h2>A Decentralized Ecosystem for Earning Cryptocurrency</h2>
          <div className="whitepaper-meta">
            <span className="meta-item">Version 1.0</span>
            <span className="meta-item">January 2025</span>
          </div>
          <div className="whitepaper-actions">
            <button className="action-button download-button">
              <img src={downloadIcon} alt="Download" />
              <span>Download PDF</span>
            </button>
            <button className="action-button share-button">
              <img src={shareIcon} alt="Share" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="whitepaper-content-container">
        <aside className={`whitepaper-sidebar ${isSidebarSticky ? 'sticky' : ''}`}>
          <div className="sidebar-header">
            <h3>Contents</h3>
          </div>
          <nav className="sidebar-navigation">
            <ul>
              <li className={activeSection === "abstract" ? "active" : ""}>
                <a onClick={() => scrollToSection("abstract")}>Abstract</a>
              </li>
              <li className={activeSection === "introduction" ? "active" : ""}>
                <a onClick={() => scrollToSection("introduction")}>Introduction</a>
              </li>
              <li className={activeSection === "vision" ? "active" : ""}>
                <a onClick={() => scrollToSection("vision")}>Vision & Mission</a>
              </li>
              <li className={activeSection === "ecosystem" ? "active" : ""}>
                <a onClick={() => scrollToSection("ecosystem")}>Ecosystem Components</a>
              </li>
              <li className={activeSection === "tokenomics" ? "active" : ""}>
                <a onClick={() => scrollToSection("tokenomics")}>Token Economics</a>
              </li>
              <li className={activeSection === "technology" ? "active" : ""}>
                <a onClick={() => scrollToSection("technology")}>Technology</a>
              </li>
              <li className={activeSection === "security" ? "active" : ""}>
                <a onClick={() => scrollToSection("security")}>Security</a>
              </li>
              <li className={activeSection === "legal" ? "active" : ""}>
                <a onClick={() => scrollToSection("legal")}>Legal & Compliance</a>
              </li>
              <li className={activeSection === "conclusion" ? "active" : ""}>
                <a onClick={() => scrollToSection("conclusion")}>Conclusion</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="whitepaper-main-content">
          <section id="abstract" className="paper-section">
            <div className="section-header">
              <h2>Abstract</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <p>
                Rum Network is a revolutionary decentralized platform designed to democratize access to cryptocurrency 
                earnings through an innovative mobile application. By combining daily mining activities, 
                engagement-based rewards, and a comprehensive ecosystem of earning opportunities, 
                Rum Network empowers users worldwide to participate in the digital economy regardless of 
                technical expertise or financial resources.
              </p>
            </div>
          </section>

          <section id="introduction" className="paper-section">
            <div className="section-header">
              <h2>Introduction</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <p>
                The cryptocurrency revolution has created unprecedented opportunities for wealth generation 
                and financial freedom. However, these opportunities have largely been accessible only to those 
                with technical knowledge, expensive hardware, or significant capital to invest. Rum Network 
                aims to bridge this gap by providing an intuitive, mobile-first platform that allows anyone 
                with a smartphone to participate in cryptocurrency mining and earning activities.
              </p>
              <div className="principles-container">
                <h3>Core Principles</h3>
                <div className="principles-grid">
                  <div className="principle-card">
                    <h4>Accessibility</h4>
                    <p>No specialized hardware or technical knowledge required</p>
                  </div>
                  <div className="principle-card">
                    <h4>Sustainability</h4>
                    <p>Energy-efficient mining mechanisms that run on standard mobile devices</p>
                  </div>
                  <div className="principle-card">
                    <h4>Community-Driven</h4>
                    <p>Rewarding active participation and network expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="vision" className="paper-section">
            <div className="section-header">
              <h2>Vision & Mission</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="vision-mission-container">
                <div className="vision-box">
                  <h3>Vision</h3>
                  <p>
                    To create a global decentralized ecosystem where individuals can achieve financial 
                    empowerment through accessible cryptocurrency earning opportunities.
                  </p>
                </div>
                <div className="mission-box">
                  <h3>Mission</h3>
                  <p>
                    To simplify cryptocurrency mining and provide multiple pathways for users to earn 
                    digital assets while fostering a sustainable and engaged community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="ecosystem" className="paper-section">
            <div className="section-header">
              <h2>Core Ecosystem Components</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={miningIcon} alt="Mining" />
                  </div>
                  <h3>Mobile Mining</h3>
                  <ul>
                    <li>Daily mining activities on standard smartphones</li>
                    <li>Energy-efficient algorithms minimizing battery consumption</li>
                    <li>Tiered mining rates based on user activity</li>
                    <li>Automatic optimization for device capabilities</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={pointsIcon} alt="Earning" />
                  </div>
                  <h3>Multiple Earning Channels</h3>
                  <ul>
                    <li>Daily Mining for Rum Coins</li>
                    <li>Ad Rewards for Rum Points</li>
                    <li>Gaming Integration for additional Points</li>
                    <li>Referral System for both Coins and Points</li>
                    <li>Task Completion for various rewards</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={walletIcon} alt="Exchange" />
                  </div>
                  <h3>Points-to-Crypto Exchange</h3>
                  <ul>
                    <li>Flexible exchange with multiple crypto options</li>
                    <li>Transparent real-time conversion rates</li>
                    <li>Low exchange fees compared to traditional platforms</li>
                    <li>Scheduled conversion periods for efficiency</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={securityIcon} alt="KYC" />
                  </div>
                  <h3>KYC System</h3>
                  <ul>
                    <li>Streamlined process through national ID verification</li>
                    <li>Secure document processing with advanced encryption</li>
                    <li>Tiered verification levels with corresponding benefits</li>
                    <li>Currently inactive, planned for future implementation</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={walletIcon} alt="Wallet" />
                  </div>
                  <h3>Wallet Integration</h3>
                  <ul>
                    <li>Secured wallet system for storing assets</li>
                    <li>Seamless airdrop distribution based on mining activity</li>
                    <li>Multi-currency support for various digital assets</li>
                    <li>Direct connection to major exchanges for trading</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={referralIcon} alt="Referral" />
                  </div>
                  <h3>Referral Program</h3>
                  <ul>
                    <li>Multi-tier referral structure</li>
                    <li>Rewards in both Rum Coins and Rum Points</li>
                    <li>Special bonuses for high-performing referrers</li>
                    <li>Transparent tracking of referral performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="tokenomics" className="paper-section">
            <div className="section-header">
              <h2>Token Economics</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="dual-token-system">
                <h3>Dual-Token System</h3>
                <div className="tokens-container">
                  <div className="token-card rum-coin">
                    <h4>Rum Coin (RUM)</h4>
                    <div className="token-details">
                      <div className="token-detail">
                        <span className="detail-label">Type:</span>
                        <span className="detail-value">BEP-20 Token on Binance Smart Chain</span>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Total Supply:</span>
                        <span className="detail-value">10 Billion (Fixed)</span>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Distribution:</span>
                        <div className="distribution-chart">
                          <div className="distribution-segment users" style={{width: '60%'}}>60%</div>
                          <div className="distribution-segment reserved" style={{width: '20%'}}>20%</div>
                          <div className="distribution-segment marketing" style={{width: '20%'}}>20%</div>
                        </div>
                        <div className="distribution-legend">
                          <div className="legend-item">
                            <span className="legend-color users-color"></span>
                            <span>60% for user mining and earning</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color reserved-color"></span>
                            <span>20% reserved for future development</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color marketing-color"></span>
                            <span>20% for marketing and partnerships</span>
                          </div>
                        </div>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Utilities:</span>
                        <ul className="utilities-list">
                          <li>Native currency of the Rum Network ecosystem</li>
                          <li>Trading on decentralized and centralized exchanges</li>
                          <li>Staking for additional benefits (future)</li>
                          <li>Governance participation (future)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="token-card rum-points">
                    <h4>Rum Points</h4>
                    <div className="token-details">
                      <div className="token-detail">
                        <span className="detail-label">Type:</span>
                        <span className="detail-value">In-app utility token</span>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Supply:</span>
                        <span className="detail-value">Dynamic based on user activity</span>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Earning Methods:</span>
                        <ul className="earning-methods-list">
                          <li>Watching advertisements</li>
                          <li>Playing integrated games</li>
                          <li>Completing special tasks</li>
                          <li>Referral bonuses</li>
                        </ul>
                      </div>
                      <div className="token-detail">
                        <span className="detail-label">Utilities:</span>
                        <ul className="utilities-list">
                          <li>Convertible to various cryptocurrencies</li>
                          <li>In-app purchases and upgrades</li>
                          <li>Mining boost activation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mining-mechanism">
                <h3>Mining Mechanism</h3>
                <p>
                  Rum Network utilizes a Proof of Engagement (PoE) algorithm that rewards users based on 
                  their activity and contribution to the network ecosystem:
                </p>
                <ul>
                  <li>Mining rewards calculated based on daily activity and engagement</li>
                  <li>Anti-fraud mechanisms to ensure fair distribution</li>
                  <li>Decreasing emission rate to ensure long-term value stability</li>
                  <li>Bonus mining periods during special events</li>
                </ul>
              </div>
              
              <div className="exchange-listings">
                <h3>Exchange Listings</h3>
                <p>The Rum Coin will be listed on:</p>
                <ul>
                  <li>Decentralized exchanges (DEXs) initially after token launch</li>
                  <li>Centralized exchanges (CEXs) following market establishment</li>
                  <li>Trading pairs will include major cryptocurrencies and stablecoins</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="technology" className="paper-section">
            <div className="section-header">
              <h2>Technology Framework</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="tech-subsection">
                <h3>Blockchain Infrastructure</h3>
                <div className="tech-details">
                  <div className="tech-detail">
                    <span className="tech-label">Network:</span>
                    <span className="tech-value">Binance Smart Chain (BSC)</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Token Standard:</span>
                    <span className="tech-value">BEP-20</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Smart Contracts:</span>
                    <span className="tech-value">Audited for security and efficiency</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Consensus:</span>
                    <span className="tech-value">Proof of Staked Authority (PoSA) as per BSC</span>
                  </div>
                </div>
              </div>
              
              <div className="tech-subsection">
                <h3>Mobile Application Architecture</h3>
                <div className="tech-details">
                  <div className="tech-detail">
                    <span className="tech-label">Frontend:</span>
                    <span className="tech-value">React Native for cross-platform compatibility</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Backend:</span>
                    <span className="tech-value">Scalable cloud infrastructure with load balancing</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Data Storage:</span>
                    <span className="tech-value">Hybrid system of on-chain and off-chain storage</span>
                  </div>
                  <div className="tech-detail">
                    <span className="tech-label">Security:</span>
                    <span className="tech-value">Multi-layer encryption and penetration testing</span>
                  </div>
                </div>
              </div>
              
              <div className="tech-subsection">
                <h3>Mining Algorithm</h3>
                <ul>
                  <li>Proprietary low-energy mining algorithm optimized for mobile devices</li>
                  <li>Adaptive difficulty based on network participation</li>
                  <li>Anti-bot measures to prevent automated mining</li>
                  <li>Regular updates to improve efficiency and security</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="security" className="paper-section">
            <div className="section-header">
              <h2>Security Measures</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="security-grid">
                <div className="security-card">
                  <h3>Platform Security</h3>
                  <ul>
                    <li>Multi-factor authentication for user accounts</li>
                    <li>Regular security audits by third-party experts</li>
                    <li>Bug bounty program to identify vulnerabilities</li>
                    <li>Advanced encryption for all sensitive data</li>
                  </ul>
                </div>
                
                <div className="security-card">
                  <h3>Smart Contract Security</h3>
                  <ul>
                    <li>Multiple rounds of code auditing</li>
                    <li>Formal verification of critical contract components</li>
                    <li>Timelocks for major protocol updates</li>
                    <li>Emergency pause functionality for critical situations</li>
                  </ul>
                </div>
                
                <div className="security-card">
                  <h3>Anti-Fraud Mechanisms</h3>
                  <ul>
                    <li>Sophisticated detection systems for abnormal activity</li>
                    <li>IP and device fingerprinting to prevent multiple accounts</li>
                    <li>Gradual release of rewards to discourage fraudulent behavior</li>
                    <li>Regular review of earning patterns to identify exploitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="legal" className="paper-section">
            <div className="section-header">
              <h2>Legal & Compliance</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div className="legal-subsection">
                <h3>Regulatory Approach</h3>
                <ul>
                  <li>Compliance with relevant cryptocurrency regulations in operating jurisdictions</li>
                  <li>Regular legal reviews as regulatory landscapes evolve</li>
                  <li>Transparent policies regarding user data and platform operations</li>
                  <li>Engagement with regulatory bodies to ensure ongoing compliance</li>
                </ul>
              </div>
              
              <div className="legal-subsection">
                <h3>KYC Implementation</h3>
                <ul>
                  <li>Identity verification through government-issued identification</li>
                  <li>Tiered verification levels with corresponding withdrawal limits</li>
                  <li>Secure storage of verification documents</li>
                  <li>Regular compliance reporting and monitoring</li>
                </ul>
                <p className="kyc-note">
                  <strong>Note:</strong> KYC functionality is currently inactive but planned for future implementation.
                </p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="paper-section">
            <div className="section-header">
              <h2>Conclusion</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <p>
                Rum Network represents a significant step forward in making cryptocurrency earning accessible to everyone. 
                By combining innovative mining techniques, multiple earning opportunities, and a user-friendly platform, 
                we are creating an ecosystem that truly democratizes access to the digital economy.
              </p>
              <p>
                Our commitment to security, sustainability, and community growth forms the foundation of a platform 
                designed for long-term success and user empowerment. As we move forward with our development roadmap, 
                we invite users worldwide to join us in building a more inclusive financial future.
              </p>
              <div className="disclaimer">
                <h3>Disclaimer</h3>
                <p>
                  This white paper is for informational purposes only and does not constitute financial advice. 
                  Cryptocurrency investments involve risk, and users should conduct their own research before participating. 
                  Rum Network makes no guarantees regarding future value or earnings potential.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default WhitePaper;