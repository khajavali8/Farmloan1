import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import farmLottie from "../assets/farm-animation.json";
import aboutLottie from "../assets/about-animation.json";
import Footer from "../components/Common/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero-section" id="hero">
        <div className="hero-text">
          <h1>Welcome to Farm IT</h1>
          <p>
            Farm IT connects farmers and investors through a smart, transparent, and efficient platform.
          </p>
          <Link to="/login" className="primary-btn">Get Started</Link>
        </div>
        <div className="hero-animation">
          <Lottie animationData={farmLottie} />
        </div>
      </section>

      <section className="features-new" id="features">
        <h2>Why Choose Farm IT?</h2>
        <div className="features-grid">
          <div className="feature-block">
           <h3>🌱 Sustainable Farming Support</h3>
               <p>Promote eco-friendly farming practices with guidance, tools, and expert support.</p>
          </div>
          <div className="feature-block">
            <h3>💼 Investor-Farmer Network</h3>
            <p>Secure funding and invest with trust and transparency.</p>
          </div>
          <div className="feature-block">
            <h3>🧾 Digital Loan Workflow</h3>
            <p>Apply, manage, and repay loans with a fully online system.</p>
          </div>
        </div>
      </section>

      <section className="about-section-new" id="about">
        <div className="about-left">
          <Lottie animationData={aboutLottie} />
        </div>
        <div className="about-right">
          <h2>About Farm IT</h2>
          <p>
            Farm IT is designed to empower farmers, simplify financial access, and enable data-driven agriculture.
            We bridge the gap between farming and fintech to create a reliable and scalable agri-tech ecosystem.
          </p>
        </div>
      </section>

      <section className="cta-banner" id="contact">
        <h2>Start Managing Your Farm Smarter</h2>
        <p>Sign up and take control of your farm operations and financial opportunities.</p>
        <Link to="/login" className="secondary-btn">Join the Movement</Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
