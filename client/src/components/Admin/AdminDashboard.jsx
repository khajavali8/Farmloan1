import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Footer from "../Common/Footer";
// import "../../styles/admin/AdminDashboard.css";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  const dashboardItems = [
    { path: "/admin/users", icon: "👥", title: "Manage Users" },
    { path: "/admin/documents", icon: "📄", title: "All Documents" },
    { path: "/admin/verify-investments", icon: "✅", title: "Verify Investments" },
    { path: "/admin/loans", icon: "💳", title: "All Loans" },
    { path: "/admin/farms", icon: "🌾", title: "All Farms" },
    { path: "/admin/transactions", icon: "💸", title: "All Transactions" },
    { path: "/admin/issues", icon: "🛠️", title: "Resolve Issues" },
  ];

  return (
    <div className="farmer-dashboard-wrapper">
      <header className="farmer-dashboard-header">
        <h1>🛡️ Admin Control Panel</h1>
        <p>Effortlessly manage the entire platform from a single place.</p>
      </header>

      <section className="dashboard-welcome-banner">
        <div className="avatar-box">
          <img
            src={
              user?.profilePic
                ? `http://localhost:5000/${user.profilePic.replace(/\\/g, "/")}`
                : "/default-profile.png"
            }
            alt="Admin Avatar"
            className="profile-avatar"
          />
        </div>
        <div className="banner-text">
          <h2>Welcome, {user?.firstName || "Admin"}!</h2>
          <p>“Leadership is not about being in charge. It is about taking care of those in your charge.”</p>
          <p className="admin-role-status">🛡️ Role: Platform Administrator</p>
        </div>
      </section>

      <section className="farmer-dashboard-content">
        <aside className="dashboard-sidebar">
          <h3>Admin Tools</h3>
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
          <h2 className="section-heading">🧠 Key Insights</h2>
          <div className="tip-cards">
            <div className="tip-card">
              <strong>🔍 User Oversight:</strong> Monitor and manage platform users.
            </div>
            <div className="tip-card">
              <strong>📝 Document Verification:</strong> Ensure compliance through user documents.
            </div>
            <div className="tip-card">
              <strong>💰 Finance Tracking:</strong> Keep tabs on transactions and loan activities.
            </div>
            <div className="tip-card">
              <strong>🌐 Farm Management:</strong> Review farm data and progress.
            </div>
            <div className="tip-card">
              <strong>🛠️ Issue Resolution:</strong> Address and resolve platform-reported issues.
            </div>
            <div className="tip-card">
              <strong>📈 Growth Metrics:</strong> Use data to guide strategic decisions.
            </div>
          </div>

          <div className="dashboard-welcome-note">
            <h3>You’re in command, Admin! 👨‍💼</h3>
            <p>
              From user management to verifying investments and resolving issues — you're the driving force 
              behind platform efficiency. Use the sidebar to take action where needed.
            </p>
          </div>

          <section className="dashboard-bottom-message">
            <h3>Need to Resolve a System Concern? 🔧</h3>
            <p>
              Visit the <Link to="/admin/issues">Issue Resolution</Link> section to manage and close 
              reported platform concerns effectively.
            </p>
          </section>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
