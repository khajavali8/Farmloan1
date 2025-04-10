import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../../styles/Navbar.css";

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
    <nav className="navbar">
      <div className="brand">
        <h2>🌿 FARM-IT</h2>
      </div>
      <div className="nav-links">
        {showLandingLinks && (
          <>
            <a href="#hero" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </>
        )}

        {user ? (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          showSignup && <Link to="/login" className="nav-link">Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
