// src/pages/ChildSafetyStandards.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ChildSafety.css"; // optional: create CSS below

const ChildSafetyStandards = () => {
  return (
    <>
      <Header />
      <main className="child-safety-container">
        <div className="inner container">
          <h1>Child Safety Standards</h1>
          <p>
            RUM Network is committed to protecting children. We strictly prohibit
            any Child Sexual Abuse Material (CSAM) or exploitation on our platform.
          </p>

          <h2>Our Key Practices</h2>
          <ul>
            <li>Zero tolerance for CSAM/CSA content.</li>
            <li>24/7 monitoring and rapid removal of reported content.</li>
            <li>Automated detection combined with manual review.</li>
            <li>Cooperation with law enforcement and reporting where required.</li>
          </ul>

          <h2>How to Report</h2>
          <p>
            If you see any suspicious or harmful content, report it via the in-app
            report button or email us at{" "}
            <a href="mailto:mujtabashah906@gmail.com">mujtabashah906@gmail.com</a>.
          </p>

          <h2>Contact</h2>
          <p>
            For child-safety inquiries, contact <strong>mujtabashah906@gmail.com</strong>.
          </p>

          <p className="note">
            Note: This page documents our policy and reporting channels. We follow
            relevant laws and cooperate with authorities as required.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChildSafetyStandards;
