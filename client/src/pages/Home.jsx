import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/farm-animation.json";
import aboutAnimation from "../assets/about-animation.json";
import Footer from "../components/Common/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Farm IT</h1>
          <p className="hero-subtitle">
            A unified platform to streamline agriculture through technology and connect farmers with investors.
          </p>
          <Link to="/login" className="cta-button">
            Get Started
          </Link>
        </div>
        <Lottie animationData={animationData} className="hero-image" />
      </header>
      <section id="features" className="features-section">
        <h2 className="section-title">Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Farm Management</h3>
            <p>Maintain detailed records and monitor operations digitally.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💸</div>
            <h3>Loan Applications</h3>
            <p>Apply and track loans with a simplified, transparent process.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Investor Connect</h3>
            <p>Facilitate funding by connecting with verified investors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Analytics Dashboard</h3>
            <p>Access reports and data insights for better decision-making.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Farm IT</h2>
          <p>
            Farm IT is designed to empower farmers, simplify financial access, and enable data-driven agriculture.
            We bridge the gap between farming and fintech to create a reliable and scalable agri-tech ecosystem.
          </p>
        </div>
        <Lottie animationData={aboutAnimation} className="about-image" />
      </section>
      <section id="contact" className="cta-section">
        <h2 className="section-title">Start Managing Your Farm Smarter</h2>
        <p>
          Whether you're a farmer or investor, Farm IT is built to help you succeed with clarity and confidence.
        </p>
        <Link to="/login" className="cta-button">
          Create Account
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
