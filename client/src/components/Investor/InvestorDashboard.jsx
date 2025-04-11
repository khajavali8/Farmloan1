import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Footer from "../Common/Footer";
import "../../styles/farmer/FarmerDashboard.css";

const InvestorDashboard = () => {
  const { user } = useContext(AuthContext);

  const insights = [
    {
      title: "📈 Smart Investing",
      description: "Diversify your portfolio by investing in multiple farms to reduce risks.",
    },
    {
      title: "🌾 Sustainable Growth",
      description: "Invest in organic and eco-friendly farms for long-term profitability.",
    },
    {
      title: "💰 High Returns",
      description: "Analyze past farm performances to maximize your investment gains.",
    },
  ];

  const dashboardItems = [
    { path: "/investor/view-farms", icon: "🌿", title: "View Farms" },
    { path: "/investor/invest-farm", icon: "💰", title: "Invest in a Farm" },
    { path: "/investor/my-investments", icon: "📊", title: "My Investments" },
    { path: "/investor/transactions", icon: "💸", title: "My Transactions" },
    { path: "/investor/transactions/analytics", icon: "📈", title: "Transaction Analytics" },
    { path: "/common/report-issue", icon: "🚨", title: "Report Issue" },
  ];

  return (
    <div className="farmer-dashboard-wrapper">
      <header className="farmer-dashboard-header">
        <h1>🪙 Investor Control Panel</h1>
        <p>Grow your wealth while supporting the farming ecosystem.</p>
      </header>

      <section className="dashboard-welcome-banner">
        <div className="avatar-box">
          <img
            src={
              user?.profilePic
                ? `http://localhost:5000/${user.profilePic.replace(/\\/g, "/")}`
                : "/default-profile.png"
            }
            alt="Investor Avatar"
            className="profile-avatar"
          />
        </div>
        <div className="banner-text">
          <h2>Welcome Back, {user?.firstName || "Investor"}! 🎯</h2>
          <p>
            "Don't put all your eggs in one basket — diversify your farm investments and help agriculture thrive."
          </p>
        </div>
      </section>

      <section className="farmer-dashboard-content">
        <aside className="dashboard-sidebar">
          <h3>Quick Navigation</h3>
          <ul>
            {dashboardItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <span>{item.icon}</span> {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="dashboard-main-info">
          <h2 className="section-heading">💡 Investment Insights</h2>
          <div className="tip-cards">
            {insights.map((tip, index) => (
              <div className="tip-card" key={index}>
                <strong>{tip.title}</strong> {tip.description}
              </div>
            ))}
          </div>

          <div className="dashboard-welcome-note">
            <h3>Ready to make an impact? 📈</h3>
            <p>
              Explore farms, make investments, and track your portfolio. Use the sidebar for quick access to all tools.
            </p>
          </div>

          <section className="dashboard-bottom-message">
            <h3>Need Help or Support? 🤝</h3>
            <p>
              If you're facing any issues or have questions, visit the{" "}
              <Link to="/common/report-issue">Report Issue</Link> page or reach out to support.
            </p>
          </section>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorDashboard;
