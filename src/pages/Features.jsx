import React from 'react';
import { FaCoins, FaGamepad, FaUserFriends, FaAd } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <Header />
      
      <div className="features-page">
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container">
            <h1 className="main-title">RUM Network Features</h1>
            <p className="subtitle">Discover multiple ways to earn and participate in our thriving decentralized ecosystem</p>
          </div>
        </div>

        <div className="container">
          <div className="section-title">
            <h2>Our Powerful Features</h2>
            <div className="title-underline"></div>
          </div>

          <div className="features-grid">
            {/* Daily Mining */}
            <div className="feature-card">
              <div className="icon-wrapper">
                <div className="feature-icon">
                  <FaCoins />
                </div>
              </div>
              <div className="feature-content">
                <h3>Daily Mining</h3>
                <p>Mine RUM Tokens daily by simply being an active participant in our network.</p>
                <ul className="feature-list">
                  <li>Log in daily to activate mining</li>
                  <li>Earn RUM Tokens daily</li>
                  <li>Boost rates with higher activity</li>
                </ul>
                <button className="feature-button">Start Mining</button>
              </div>
            </div>

            {/* Watch Ads */}
            <div className="feature-card">
              <div className="icon-wrapper">
                <div className="feature-icon">
                  <FaAd />
                </div>
              </div>
              <div className="feature-content">
                <h3>Watch Ads, Earn RUM</h3>
                <p>Convert your attention into rewards by watching selected advertisements.</p>
                <ul className="feature-list">
                  <li>Watch curated partner ads</li>
                  <li>Earn points for each view</li>
                  <li>Completely optional participation</li>
                </ul>
                <button className="feature-button">Browse Ads</button>
              </div>
            </div>

            {/* Play Games */}
            <div className="feature-card">
              <div className="icon-wrapper">
                <div className="feature-icon">
                  <FaGamepad />
                </div>
              </div>
              <div className="feature-content">
                <h3>Gaming Rewards</h3>
                <p>Have fun while earning RUM Points playing our selection of games.</p>
                <ul className="feature-list">
                  <li>Play 2d, 3d games</li>
                  <li>Earn Rum Points</li>
                  <li>Play daily Earn Rum Points</li>
                </ul>
                <button className="feature-button">Play Now</button>
              </div>
            </div>

            {/* Referral Program */}
            <div className="feature-card">
              <div className="icon-wrapper">
                <div className="feature-icon">
                  <FaUserFriends />
                </div>
              </div>
              <div className="feature-content">
                <h3>Referral Program</h3>
                <p>Grow the community and be rewarded for bringing friends to the RUM Network.</p>
                <ul className="feature-list">
                  <li>10 RUM Tokens per Each referral</li>
                  <li>100 Rum Points on Each referral</li>
                  <li>Special rewards at milestones</li>
                </ul>
                <button className="feature-button">Refer Friends</button>
              </div>
            </div>
          </div>

          <div className="token-section">
            <div className="section-title">
              <h2>Understanding RUM</h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="token-grid">
              <div className="token-card">
                <div className="token-icon-wrapper">
                  <div className="token-icon points">P</div>
                </div>
                <div className="token-content">
                  <h3>RUM Points</h3>
                  <ul className="token-features">
                    <li>In-platform reward currency</li>
                    <li>Earned through ads and games</li>
                    <li>Used for in-platform benefits</li>
                    <li>No blockchain transaction fees</li>
                  </ul>
                </div>
              </div>
              
              <div className="token-card">
                <div className="token-icon-wrapper">
                  <div className="token-icon tokens">T</div>
                </div>
                <div className="token-content">
                  <h3>RUM Tokens</h3>
                  <ul className="token-features">
                    <li>Blockchain-based cryptocurrency</li>
                    <li>Earned through mining and referrals</li>
                    <li>Can be traded on exchanges</li>
                    <li>Limited supply with deflationary model</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
