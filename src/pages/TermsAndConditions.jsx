// TermsAndConditions.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />
      
      <main>
        <div className="terms-container">
          <div className="terms-content">
            <h1>Terms and Conditions – Rum Network</h1>
            <p className="last-updated">Effective Date: April 15, 2025</p>
            <p className="last-updated">Last Updated: April 22, 2025</p>

            <section>
              <h2>1. Overview of the Platform</h2>
              <p>Rum Network is a blockchain-based platform that allows users to earn digital rewards through:</p>
              <ul>
                <li>Mining Rum Tokens through regular check-ins and timed mining sessions</li>
                <li>Watching advertisements and completing offers to earn Rum Points</li>
                <li>Playing in-app games and participating in community activities</li>
                <li>Referring new users to the Rum Network ecosystem</li>
              </ul>
              <p>By accessing or using the Rum Network app or website ("the Platform"), you agree to be bound by these Terms and Conditions.</p>
            </section>

            <section>
              <h2>2. Eligibility & Account Registration</h2>
              <p>2.1. You must be at least 13 years old to use the app.</p>
              <p>2.2. If you are below the age of majority in your country (typically 18 years), parental or guardian consent is required before using our services.</p>
              <p>2.3. You must provide accurate and complete information when creating your account. Fake or duplicate accounts are strictly prohibited.</p>
              <p>2.4. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p>2.5. Each individual may maintain only one active account. Multiple accounts registered to the same person will result in termination of all associated accounts and forfeiture of earned rewards.</p>
            </section>

            <section>
              <h2>3. Rum Token – Mining System</h2>
              <p>3.1. Rum Token ($RUM) is the native cryptocurrency of the Rum Network platform.</p>
              <p>3.2. Users can earn Rum Tokens exclusively by participating in mining sessions within the app.</p>
              <p>3.3. The mining mechanism is designed to be energy-efficient and does not consume significant device resources. It operates through regular check-ins and running timed mining sessions.</p>
              <p>3.4. Mining rates and rewards may be adjusted periodically based on network activity, user base growth, and tokenomic requirements.</p>
              <p>3.5. Earned tokens are stored in your app balance and will be airdropped to your wallet once the Rum Token is officially launched on the blockchain.</p>
              <p>3.6. The company reserves the right to implement anti-fraud measures including mining caps, cooling periods, and verification requirements to ensure fair distribution.</p>
            </section>

            <section>
              <h2>4. Rum Points – Ads & Games Rewards</h2>
              <p>4.1. Rum Points are in-app rewards awarded to users for engaging in various platform activities such as:</p>
              <ul>
                <li>Watching advertisements</li>
                <li>Completing sponsored offers</li>
                <li>Playing in-app games</li>
                <li>Participating in community challenges</li>
                <li>Completing daily tasks</li>
              </ul>
              <p>4.2. Rum Points are not tokens or cryptocurrency but may be converted to Rum Tokens in the future, based on platform conversion policies.</p>
              <p>4.3. Conversion rates between Rum Points and Rum Tokens are determined at the sole discretion of Rum Network and may be adjusted over time.</p>
              <p>4.4. Rum Points have no cash value and cannot be transferred between accounts or redeemed outside the Rum Network ecosystem.</p>
              <p>4.5. Rum Points may expire if an account remains inactive for more than 90 consecutive days.</p>
            </section>

            <section>
              <h2>5. KYC & Verification</h2>
              <p>5.1. To receive the final airdrop and unlock full platform features, users must complete KYC (Know Your Customer) verification.</p>
              <p>5.2. The KYC process will require uploading valid government-issued identification documents for identity verification.</p>
              <p>5.3. Any attempt to submit fraudulent, forged, or manipulated documents will result in immediate permanent account termination and forfeiture of all accumulated rewards.</p>
              <p>5.4. Your personal information will be processed in accordance with our Privacy Policy and applicable data protection laws.</p>
              <p>5.5. We may employ third-party KYC service providers to process verifications securely.</p>
              <p>5.6. We reserve the right to request additional verification information if deemed necessary.</p>
            </section>

            <section>
              <h2>6. Wallet Integration & Airdrop</h2>
              <p>6.1. A built-in crypto wallet will be integrated within the app before the Rum Token launch.</p>
              <p>6.2. Users' accumulated Rum Tokens will be airdropped directly into their in-app wallet following the token launch.</p>
              <p>6.3. The wallet will support withdrawals after the token goes live on the blockchain and is listed on exchanges.</p>
              <p>6.4. Users are entirely responsible for the security of their wallet credentials, recovery phrases, and private keys.</p>
              <p>6.5. Rum Network is not liable for any loss of tokens due to user negligence, compromised credentials, phishing attempts, or failure to follow security best practices.</p>
              <p>6.6. The timing and process of the airdrop may be adjusted based on market conditions and technical requirements.</p>
            </section>

            <section>
              <h2>7. User Conduct & Prohibited Activities</h2>
              <p>Users agree not to:</p>
              <ul>
                <li>Use bots, scripts, emulators, or automation tools to simulate mining or farm points</li>
                <li>Create or use multiple accounts for self-referral or reward manipulation</li>
                <li>Attempt to hack, exploit, reverse engineer, or disrupt the app or its services</li>
                <li>Post or share offensive, illegal, discriminatory, or misleading content</li>
                <li>Spam other users or post promotional content without explicit permission</li>
                <li>Impersonate Rum Network staff, representatives, or other users</li>
                <li>Exploit bugs, glitches, or technical vulnerabilities for unfair advantage</li>
                <li>Sell, trade, or attempt to monetize accounts or rewards outside the platform</li>
                <li>Use VPN or proxy services to circumvent geographical restrictions</li>
                <li>Engage in any activity that violates applicable laws or regulations</li>
              </ul>
              <p>Violation of these prohibitions may result in immediate account termination and forfeiture of all accumulated rewards.</p>
            </section>

            <section>
              <h2>8. Platform Updates & Changes</h2>
              <p>8.1. Rum Network is an evolving platform. We reserve the right to modify, update, or change any aspect of our services, including features, reward systems, conversion rates, and tokenomics.</p>
              <p>8.2. Material changes to these Terms will be communicated to users through in-app notifications, email, or platform announcements.</p>
              <p>8.3. Continued use of the Platform after any modifications indicates your acceptance of the updated Terms.</p>
              <p>8.4. We may occasionally implement maintenance periods or service interruptions to improve the Platform. We will strive to provide advance notice when possible.</p>
            </section>

            <section>
              <h2>9. No Financial Advice or Guarantees</h2>
              <p>9.1. Rum Network is not a bank, financial institution, or investment advisor. We do not provide investment advice or financial guarantees of any kind.</p>
              <p>9.2. Participation in the Rum Network is purely voluntary and reward-based. Users acknowledge that no returns, profits, or financial gains are promised or implied.</p>
              <p>9.3. The value of digital tokens may fluctuate, and users bear the full risk of their participation and token ownership.</p>
              <p>9.4. Users are solely responsible for conducting their own research and should consult financial advisors before making any decisions.</p>
              <p>9.5. Rum Network is not liable for any losses, including but not limited to financial, reputational, or opportunity-based, arising from the use of the Platform.</p>
            </section>

            <section>
              <h2>10. Intellectual Property</h2>
              <p>10.1. All content, logos, trademarks, designs, user interfaces, code, and software associated with the Rum Network are the exclusive intellectual property of Rum Network or its licensors.</p>
              <p>10.2. Users may not copy, modify, distribute, sell, lease, or create derivative works based on Rum Network content without explicit written permission.</p>
              <p>10.3. Any feedback, suggestions, or ideas submitted by users regarding the Platform may be used by Rum Network without any obligation to compensate users.</p>
              <p>10.4. By posting content on public areas of the Platform, users grant Rum Network a non-exclusive, royalty-free license to use, display, and distribute such content in connection with our services.</p>
            </section>

            <section>
              <h2>11. Privacy and Data Collection</h2>
              <p>11.1. Our Privacy Policy details how we collect, use, store, and protect your personal information.</p>
              <p>11.2. By using Rum Network, you consent to our data practices as described in the Privacy Policy.</p>
              <p>11.3. We implement reasonable security measures to protect user data, but we cannot guarantee absolute security.</p>
              <p>11.4. The Platform may use cookies, analytics tools, and similar technologies to enhance user experience.</p>
            </section>

            <section>
              <h2>12. Limitation of Liability</h2>
              <p>12.1. To the fullest extent permitted by law, Rum Network, its affiliates, directors, officers, employees, and agents shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, including but not limited to loss of profits, goodwill, data, or other intangible losses.</p>
              <p>12.2. Rum Network makes no guarantees regarding uptime, uninterrupted access, accuracy of data, or security beyond commercially reasonable efforts.</p>
              <p>12.3. In no event shall Rum Network's total liability exceed any amount paid directly to Rum Network by the user in the preceding six (6) months.</p>
              <p>12.4. Users waive any right to participate in class actions, collective claims, or representative proceedings against Rum Network.</p>
            </section>

            <section>
              <h2>13. Termination of Service</h2>
              <p>13.1. We reserve the right to suspend, restrict, or permanently terminate any user account that violates these Terms, abuses the system, or engages in suspicious activity.</p>
              <p>13.2. Users may terminate their account at any time by contacting support, though accumulated rewards may be forfeited upon termination.</p>
              <p>13.3. Upon termination for any reason, provisions related to Intellectual Property, Limitation of Liability, and Governing Law shall survive.</p>
            </section>

            <section>
              <h2>14. Dispute Resolution</h2>
              <p>14.1. All disputes, controversies, or claims arising out of or relating to these Terms shall be resolved through confidential, binding arbitration, and not in court, except for claims for injunctive or equitable relief.</p>
              <p>14.2. Arbitration will be conducted by the International Chamber of Commerce in accordance with its rules. The seat of arbitration shall be Hyderabad, Pakistan. Language of arbitration: English.</p>
              <p>14.3. Users waive their right to a jury trial or to participate in a class action lawsuit or class-wide arbitration.</p>
              <p>14.4. Each party shall bear its own costs, and the arbitrator's decision shall be final and binding.</p>
            </section>

            <section>
              <h2>15. Governing Law</h2>
              <p>These Terms and any dispute arising out of your use of the Platform shall be governed exclusively by the laws of Pakistan, without regard to conflict of laws principles. Jurisdiction shall reside solely in the courts of Hyderabad, Pakistan.</p>
            </section>
            
            <section>
              <h2>16. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
            </section>

            <section>
              <h2>17. Contact Us</h2>
              <p>For questions, support, or feedback regarding these Terms or the Platform, please reach us at:</p>
              <p>Email: official.rum.network@gmail.com</p>
              <p>Website: www.rumnetwork.com</p>
            </section>

            <section>
              <h2>18. Class Action Waiver</h2>
              <p>By using the Rum Network platform, you agree that any dispute resolution shall be conducted only on an individual basis and not in a class, consolidated, or representative action.</p>
              <p>You waive any right to participate in a class action lawsuit or arbitration against Rum Network or its affiliates.</p>
            </section>

            <div className="acceptance">
              <p>By using the Rum Network app or clicking "I Agree," you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;