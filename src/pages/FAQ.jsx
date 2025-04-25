import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      category: "General",
      questions: [
        {
          question: "What is RUM Network?",
          answer: "RUM Network is a decentralized ecosystem where users can earn cryptocurrency by participating in various activities such as daily mining, watching ads, playing games, and referring friends. Our platform combines blockchain technology with user-friendly features to make crypto earnings accessible to everyone."
        },
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Create Account' button at the top of our website. You'll need to provide a valid email address and create a password. Once registered, you'll receive a confirmation email to verify your account. After verification, you can set up your profile and start earning right away."
        },
        {
          question: "Is RUM Network available worldwide?",
          answer: "Yes, RUM Network is available worldwide. However, certain features might have regional restrictions due to local regulations. Users from all countries can register and participate in most activities on our platform."
        }
      ]
    },
    {
      category: "Earnings & Mining",
      questions: [
        {
          question: "How does daily mining work?",
          answer: "Daily mining is activated simply by logging into your account. The mining process runs in the background, allowing you to earn up to 100 RUM Tokens daily depending on your activity level and time spent on the platform. No special equipment or technical knowledge is required."
        },
        {
          question: "What's the difference between RUM Points and RUM Tokens?",
          answer: "RUM Points are our in-platform reward currency earned through activities like watching ads and playing games. They can be used for platform benefits but have no transaction fees. RUM Tokens are blockchain-based cryptocurrency that can be earned through mining and referrals, traded on exchanges, and have a limited supply with a deflationary model."
        },
        {
          question: "How can I increase my mining rate?",
          answer: "You can increase your mining rate by being more active on the platform, completing daily tasks, achieving milestones, and upgrading your mining level. The more engaged you are with the platform, the higher your mining rate will be."
        },
        {
          question: "When and how can I withdraw my RUM Tokens?",
          answer: "You can withdraw your RUM Tokens once you've reached the minimum threshold of 500 tokens. Withdrawals can be processed to your personal crypto wallet through our Withdraw section. Processing typically takes 24-48 hours, and there's a small network fee for each withdrawal."
        }
      ]
    },
    {
      category: "Referrals & Community",
      questions: [
        {
          question: "How does the referral program work?",
          answer: "Our referral program rewards you with 50 RUM Tokens for each active user you bring to the platform. Additionally, you earn 5% of your referrals' mining rewards. Each user gets a unique referral link that can be shared via social media, email, or messaging apps."
        },
        {
          question: "What qualifies as an 'active referral'?",
          answer: "An active referral is someone who signs up using your referral link and remains active on the platform for at least 7 days. They must also complete their profile and participate in at least one mining session to be counted as active."
        },
        {
          question: "Are there any limits to how many people I can refer?",
          answer: "There's no limit to how many people you can refer. The more active users you bring to the platform, the more rewards you'll earn. We also offer special milestone bonuses when you reach certain referral counts."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "Is my data secure on RUM Network?",
          answer: "Yes, we take security very seriously. We use industry-standard encryption protocols to protect your personal information and financial data. Our platform undergoes regular security audits, and we employ multi-layer security measures to protect against unauthorized access."
        },
        {
          question: "What blockchain technology does RUM Network use?",
          answer: "RUM Network is built on a modified Ethereum blockchain using Proof of Stake consensus mechanism, which is energy-efficient and scalable. Our smart contracts have been audited by third-party security firms to ensure their reliability and security."
        },
        {
          question: "How do I secure my RUM Network account?",
          answer: "We strongly recommend enabling two-factor authentication (2FA) on your account, using a strong unique password, and regularly checking your account activity. Never share your password or recovery phrases with anyone, and be wary of phishing attempts."
        }
      ]
    },
    {
      category: "Future Developments",
      questions: [
        {
          question: "What features are coming soon to RUM Network?",
          answer: "We're working on several exciting features including a Mobile Mining App for earning on the go, DEX Integration for direct token trading, Governance Voting to participate in platform decisions, and an NFT Marketplace for digital assets creation and trading."
        },
        {
          question: "Will RUM be listed on major exchanges?",
          answer: "We're actively working on partnerships with several major exchanges. While we can't disclose specific details due to confidentiality agreements, we aim to have RUM Tokens listed on at least two major exchanges by the end of this year."
        },
        {
          question: "How can I stay updated on new features and announcements?",
          answer: "You can stay updated by subscribing to our newsletter, following our official social media channels, joining our community on Discord or Telegram, and regularly checking the Announcements section in your RUM Network dashboard."
        }
      ]
    }
  ];

  // Filter items based on search query
  const filteredFaqItems = searchQuery.trim() !== '' 
    ? faqItems.map(category => {
        const filteredQuestions = category.questions.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        return {
          ...category,
          questions: filteredQuestions
        };
      }).filter(category => category.questions.length > 0)
    : faqItems;

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // The filtering happens automatically as the searchQuery state changes
  };

  return (
    <div className="faq-container">
      <Header />
      
      <div className="faq-page">
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container">
            <h1 className="main-title">Frequently Asked Questions</h1>
            <p className="subtitle">Everything you need to know about RUM Network</p>
          </div>
        </div>

        <div className="container">
          <div className="faq-content">
            <div className="section-title">
              <h2>Have Questions? We Have Answers</h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="search-container">
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">Search</button>
              </form>
            </div>
            
            {searchQuery.trim() !== '' && filteredFaqItems.length === 0 && (
              <div className="no-results">
                <p>No results found for "{searchQuery}". Please try another search term.</p>
              </div>
            )}

            <div className="faq-categories">
              {filteredFaqItems.map((category, categoryIndex) => (
                <div className="faq-category" key={categoryIndex}>
                  <div className="category-header">
                    <h3><FaQuestionCircle className="category-icon" /> {category.category}</h3>
                  </div>
                  
                  <div className="category-questions">
                    {category.questions.map((item, index) => {
                      const itemIndex = `${categoryIndex}-${index}`;
                      const isActive = activeIndex === itemIndex;
                      
                      return (
                        <div className={`accordion-item ${isActive ? 'active' : ''}`} key={index}>
                          <div 
                            className="accordion-header"
                            onClick={() => toggleAccordion(itemIndex)}
                          >
                            <h4>{item.question}</h4>
                            {isActive ? <FaChevronUp className="accordion-icon" /> : <FaChevronDown className="accordion-icon" />}
                          </div>
                          
                          <div className={`accordion-content ${isActive ? 'show' : ''}`}>
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;