import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ChildSafety.css';

const ChildSafetyStandards = () => {
    return (
        <div className="child-safety-page">
            <Header />

            <section className="child-safety-hero">
                <div className="container text-center">
                    <h1>Child Safety Standards</h1>
                    <p>Our commitment to protecting children online</p>
                </div>
            </section>

            <section className="child-safety-content container">
                <h2>Our Policy Against Child Sexual Abuse and Exploitation</h2>
                <p>
                    RUM Network strictly prohibits any form of Child Sexual Abuse Material (CSAM) 
                    or exploitation on our platform. We are committed to protecting minors 
                    and maintaining a safe environment for all users.
                </p>

                <h3>Key Principles:</h3>
                <ul>
                    <li>Zero tolerance for CSAM or any exploitative content.</li>
                    <li>Immediate removal of any reported harmful content.</li>
                    <li>Mandatory reporting to relevant authorities when required by law.</li>
                    <li>Strict verification processes for suspicious activities.</li>
                </ul>

                <h3>Reporting Harmful Content:</h3>
                <p>
                    Users can report any suspected CSAM content directly within our app using the 
                    "Report" feature or by emailing us at <strong>mujtabashah906@gmail.com</strong>.
                </p>

                <h3>Compliance:</h3>
                <p>
                    We comply with all relevant child protection laws and cooperate fully with 
                    national and international law enforcement agencies.
                </p>

                <p><strong>Contact:</strong> For inquiries about our child safety policy, email us at <strong>mujtabashah906@gmail.com</strong>.</p>
            </section>

            <Footer />
        </div>
    );
};

export default ChildSafetyStandards;
