// import React from "react";
// import { Link } from "react-router-dom";
// import "../../styles/farmer/FarmerDashboard.css";
// import Footer from "../Common/Footer";

// const FarmerDashboard = () => {
//   const dashboardItems = [
//     {path:"/farmer/farmer-profile", icon:"👨‍🌾", title:"My Profile", description:"View and update your profile details."},
//     { path: "/farmer/farm-form", icon: "🚜", title: "Register a Farm", description: "Add and manage your farm details." },
//     { path: "/farmer/my-farms", icon: "🌾", title: "My Farms", description: "View and manage your registered farms." },
//     { path: "/farmer/upload-document", icon: "📄", title: "Upload Document", description: "Submit necessary farm-related documents." },
//     { path: "/farmer/my-documents", icon: "📂", title: "My Documents", description: "View and download uploaded documents." },
//     { path: "/farmer/my-loans", icon: "💳", title: "My Loans", description: "Track your loan requests and approvals." },
//     { path: "/farmer/transactions", icon: "💸", title: "My Transactions", description: "Monitor all your financial transactions." },
//     {path :"/common/report-issue", icon: "🚨", title: "Report Issue", description: "Report any issues or problems to the admin."},

//   ];

//   const tips = [
//     { title: "🌿 Crop Rotation", description: "Improve soil health and reduce pests by rotating crops each season." },
//     { title: "💧 Efficient Irrigation", description: "Use drip irrigation to save water and increase yield." },
//     { title: "🌞 Seasonal Planting", description: "Check the best planting time for each crop to maximize growth." },
//   ];

//   return (
//     <div className="page-container">

//       <div className="banner">
//         <h2>🚜 Grow Your Farm, Grow Your Future! 🌾</h2>
//         <p>Manage your farm efficiently, apply for loans, and track all your transactions in one place.</p>
//       </div>

//       <div className="container">
//         <h1 className="dashboard-title">Welcome, Farmer! 👨‍🌾</h1>
//         <p className="dashboard-subtitle">
//           Explore the tools and features to manage your farm operations smoothly.
//         </p>

//         <div className="tips-section">
//           <h3>📌 Farming Tips & Resources</h3>
//           <ul>
//             {tips.map((tip, index) => (
//               <li key={index}>
//                 <strong>{tip.title}</strong> - {tip.description}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="dashboard-grid">
//           {dashboardItems.map((item, index) => (
//             <Link to={item.path} key={index} className="dashboard-card">
//               <div className="card-content">
//                 <span className="icon">{item.icon}</span>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default FarmerDashboard;




import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../../styles/farmer/FarmerDashboard.css";
import Footer from "../Common/Footer";

const FarmerDashboard = () => {
  const { user } = useContext(AuthContext);

  const dashboardItems = [
    { path: "/farmer/farmer-profile", icon: "👨‍🌾", title: "My Profile" },
    { path: "/farmer/farm-form", icon: "🚜", title: "Register a Farm" },
    { path: "/farmer/my-farms", icon: "🌾", title: "My Farms" },
    { path: "/farmer/upload-document", icon: "📄", title: "Upload Document" },
    { path: "/farmer/my-documents", icon: "📂", title: "My Documents" },
    { path: "/farmer/my-loans", icon: "💳", title: "My Loans" },
    { path: "/farmer/transactions", icon: "💸", title: "My Transactions" },
    { path: "/common/report-issue", icon: "🚨", title: "Report Issue" },
  ];

  return (
    <div className="farmer-dashboard-wrapper">
      <header className="farmer-dashboard-header">
        <h1>🌾 Farmer Control Panel</h1>
        <p>Manage everything from your digital farming command center.</p>
      </header>

      <section className="dashboard-welcome-banner">
        <div className="avatar-box">
          <img
            src={
              user?.profilePic
                ? `http://localhost:5000/${user.profilePic.replace(/\\/g, "/")}`
                : "/default-profile.png"
            }
            alt="Farmer Avatar"
            className="profile-avatar"
          />
        </div>
        <div className="banner-text">
          <h2>Welcome Back, {user?.firstName || "Farmer"}!</h2>
          <p>
            "The farmer is the only man in our economy who buys everything at retail,
            sells everything at wholesale, and pays the freight both ways." <br /> — John F. Kennedy
          </p>
          <p className={`verification-status ${user?.isVerified ? "verified" : "not-verified"}`}>
            {user?.isVerified ? "✅ Documents Verified" : "❗ Documents Not Verified"}
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
          <h2 className="section-heading">📢 Farming Tips of the Season</h2>
          <div className="tip-cards">
            <div className="tip-card">
              <strong>🌿 Crop Rotation:</strong> Keeps your soil fertile and balanced.
            </div>
            <div className="tip-card">
              <strong>💧 Drip Irrigation:</strong> Saves water and ensures even watering.
            </div>
            <div className="tip-card">
              <strong>🌞 Seasonal Sowing:</strong> Use seasonal calendars for better yield.
            </div>
            <div className="tip-card">
              <strong>🧪 Soil Testing:</strong> Know your soil before planting.
            </div>
            <div className="tip-card">
              <strong>🪱 Compost Use:</strong> Boost organic matter in your fields.
            </div>
            <div className="tip-card">
              <strong>👨‍🔬 Pest Control:</strong> Use integrated practices to reduce damage.
            </div>
          </div>

          <div className="dashboard-welcome-note">
            <h3>You're all set, farmer! 👨‍🌾</h3>
            <p>
              You can now register farms, apply for loans, upload documents, and track your
              farming journey. Use the sidebar for quick access.
            </p>
          </div>
          <section className="dashboard-bottom-message">
        <h3>Need Help or Support? 🤝</h3>
        <p>
          If you're facing any issues or have questions, feel free to visit the{" "}
          <Link to="/common/report-issue">Report Issue</Link> page or contact our support team.
        </p>
      </section>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
