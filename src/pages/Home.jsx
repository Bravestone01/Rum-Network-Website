import Header from "../components/Header";
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
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />

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
              <h3>Download Rum Network App</h3>
              <p>Get started with our powerful app and begin your journey to financial freedom.</p>
              <div className="download-buttons">
                <a href="#" className="download-button android">
                  <img src={googleplayimage} alt="Google Play" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>

          <div className="screenshots-side">
            <img src={rumimage2} alt="Rum Network Dashboard" className="app-screenshot" />
          </div>
        </div>

        {/* Features Preview Section */}
        <div className="features-preview">
          <div className="feature">
            <div className="feature-icon">
              <img src={miningimage} alt="Mining" className="icon-image" />
            </div>
            <h3>Mine Rum</h3>
            <p>Earn Rum tokens with our efficient mobile mining system</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={marketupdateImgae} alt="Market Updates" className="icon-image" />
            </div>
            <h3>Market Updates</h3>
            <p>Stay informed with real-time cryptocurrency market data</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={lockicon} alt="Security" className="icon-image" />
            </div>
            <h3>Enhanced Security</h3>
            <p>Your assets protected with industry-leading security measures</p>
          </div>
        </div>

        {/* Earn More Section */}
        <div className="earn-more-section">
          <h2 className="section-title">Earn <span className="highlight">More</span></h2>
          <p className="earn-more-intro">
            Multiple ways to earn Rum Points that you can convert to cryptocurrency
          </p>

          <div className="earning-methods">
            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={watchAdsImage} alt="Watch Ads" className="icon-image" />
              </div>
              <h3>Watch Ads</h3>
              <p>Earn Rum Points by watching short advertisements in your spare time</p>
            </div>

            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={playGamesImage} alt="Play Games" className="icon-image" />
              </div>
              <h3>Play Games</h3>
              <p>Have fun playing games and earn Rum Points while enjoying yourself</p>
            </div>

            <div className="earning-method">
              <div className="earning-method-icon">
                <img src={convertPointsImage} alt="Convert Points" className="icon-image" />
              </div>
              <h3>Convert Points</h3>
              <p>Exchange your earned Rum Points to cryptocurrency of your choice</p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="vision-section">
          <div className="vision-content">
            <h2 className="section-title">Our <span className="highlight">Vision</span></h2>
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
                <img src={visionImage} alt="Our Vision" className="vision-image" />
              </div>
            </div>
          </div>
        </div>

        {/* User Stats Section */}
        <div className="user-stats-section">
          <div className="stats-content">
            <h2 className="section-title">Our <span className="highlight">Community</span></h2>
            <p className="stats-intro">
              Join thousands of users already benefiting from the Rum Network ecosystem
            </p>
            
            <div className="stats-counters">
              <div className="stat-card">
                <div className="stat-icon">
                  <img src={userIcon} alt="Total Users" className="icon-image" />
                </div>
                <div className="stat-numbers">
                  <span className="stat-value">150,000+</span>
                  <span className="stat-label">Total Users</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <img src={activeUserIcon} alt="Active Users" className="icon-image" />
                </div>
                <div className="stat-numbers">
                  <span className="stat-value">72,500+</span>
                  <span className="stat-label">Active Daily Users</span>
                </div>
              </div>
            </div>
            
            <a href="#" className="join-community-button">
              Download App & Join
            </a>
          </div>
        </div>
          
      </main>
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Home;