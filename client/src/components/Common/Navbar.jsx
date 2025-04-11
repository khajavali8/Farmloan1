import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../../styles/Navbar.css";
import organicIcon from "../../assets/organic.gif"; 

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const showLandingLinks = !user && pathname === "/";
  const showSignup = !user && !["/login", "/register"].includes(pathname);

  return (
    <nav className="nav-glass">
<div className="nav-brand">
  <img src={organicIcon} alt="Farm IT Logo" className="brand-icon" />
  <span className="brand-text">Farm IT</span>
</div>

      <div className="nav-items">
        {showLandingLinks && (
          <>
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        )}
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          showSignup && <Link to="/login">Sign Up</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
