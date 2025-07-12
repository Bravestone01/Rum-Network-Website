import { FaCheck, FaHourglass, FaLock } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Roadmap.css';
import logo from "../assets/logo_resized.png";

const Roadmap = () => {
    // Hardcoded roadmap items with predetermined completion status
    const roadmapItems = [
        // Phase 1: Beta Launch
        {
            phase: 1,
            title: "Beta Launch",
            completed: false,
            items: [
                { id: 1, text: "Website Launch", completed: true },
                { id: 2, text: "App Launch on Play Store", completed: true }
            ]
        },
        // Phase 2: Community Growth & KYC
        {
            phase: 2,
            title: "KYC Open (100K Users)",
            completed: false,
            items: [
                { id: 3, text: "Reach 100K Users", completed: false },
                { id: 4, text: "Open KYC Process", completed: false }
            ]
        },
        // Phase 3: Wallet Integration
        {
            phase: 3,
            title: "Wallet Launch (1M Users)",
            completed: false,
            items: [
                { id: 5, text: "Reach 1 Million Users", completed: false },
                { id: 6, text: "Wallet Launch", completed: false }
            ]
        },
        // Phase 4: Market Launch
        {
            phase: 4,
            title: "Open Market Launch",
            completed: false,
            items: [
                { id: 7, text: "CEX Listing", completed: false },
                { id: 8, text: "DEX Listing", completed: false }
            ]
        }
    ];

    // Function to determine which icon to display
    const getStatusIcon = (phase, completed) => {
        if (completed) {
            return <FaCheck className="status-icon completed" />;
        } else if (phase === 1 || roadmapItems[phase - 2]?.completed) {
            return <FaHourglass className="status-icon in-progress" />;
        } else {
            return <FaLock className="status-icon locked" />;
        }
    };

    return (
        <div className="roadmap-page">
            <Header />

            <div className="roadmap-hero">
                <div className="container">
                    <div className="logo-container">
                        <img src={logo} alt="RUM Network Logo" className="rum-logo" />
                    </div>
                    <h1>RUM Network Development Roadmap</h1>
                    <p>Our journey from beta to market launch</p>
                </div>
            </div>

            <div className="roadmap-container container">
                <div className="roadmap-intro">
                    <h2>Building the Future of RUM Network</h2>
                    <p>
                        Follow our development journey from beta launch to a successful market debut.
                        Each phase represents a significant milestone in our growth.
                    </p>
                </div>

                <div className="roadmap-timeline">
                    {roadmapItems.map((phase, index) => {
                        // Calculate if phase is completed based on all items being completed
                        const phaseCompleted = phase.items.every(item => item.completed);

                        return (
                            <div
                                key={phase.phase}
                                className={`roadmap-phase ${phaseCompleted ? 'phase-completed' : ''} ${index % 2 === 0 ? 'phase-left' : 'phase-right'}`}
                            >
                                <div className="phase-header">
                                    <div className="phase-title">
                                        <span className="phase-number">Phase {phase.phase}</span>
                                        <h3>{phase.title}</h3>
                                    </div>
                                    <div className="phase-status">
                                        {getStatusIcon(phase.phase, phaseCompleted)}
                                    </div>
                                </div>

                                <div className="phase-content">
                                    <ul className="milestone-list">
                                        {phase.items.map(item => (
                                            <li
                                                key={item.id}
                                                className={`milestone-item ${item.completed ? 'milestone-completed' : ''}`}
                                            >
                                                <div className="milestone-checkbox">
                                                    {item.completed ? <FaCheck /> : null}
                                                </div>
                                                <div className="milestone-text">{item.text}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="roadmap-disclaimer">
                    <p>
                        <strong>Note:</strong> This roadmap reflects our current development plan.
                        Additional features and improvements will be announced as the project evolves.
                    </p>
                </div>
            </div>

            <div className="cta-section">
                <div className="container">
                    <h2>Join Us on This Journey</h2>
                    <p>Be part of the RUM Network community and help shape the future</p>
                    <div className="cta-buttons">
                        <a href="#" className="primary-button">Join Community</a>
                        <a href="#" className="secondary-button">Follow Updates</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Roadmap;