import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import AuthContext from "../../context/AuthContext";
import api from "../../services/api";
import "../../styles/farmer/AuthStyles.css";

const AuthPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", role: ""
    });
    const [profilePic, setProfilePic] = useState(null);
    const [otp, setOtp] = useState("");
    const [useOtp, setUseOtp] = useState(false);
    const [otpRequested, setOtpRequested] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFileChange = (e) => setProfilePic(e.target.files[0]);
    const handleOtpChange = (e) => setOtp(e.target.value);

    const toggleMode = () => {
        setIsRegistering(!isRegistering);
        setError(""); setSuccess(""); setUseOtp(false);
    };

    const requestOtp = async () => {
        try {
            await api.post("/auth/send-otp", { email: formData.email });
            setSuccess("📩 OTP sent to your email.");
            setOtpRequested(true);
        } catch {
            setError("❌ Failed to send OTP.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); setSuccess("");

        if (isRegistering) {
            const formDataWithFile = new FormData();
            Object.entries(formData).forEach(([key, value]) => formDataWithFile.append(key, value));
            if (profilePic) formDataWithFile.append("profilePic", profilePic);

            try {
                await api.post("/auth/register", formDataWithFile, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                setSuccess("🎉 Registration successful!");
                setTimeout(() => {
                    setIsRegistering(false);
                    setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
                }, 1500);
            } catch (err) {
                setError(err.response?.data?.message || "❌ Registration failed.");
            }

        } else {
            try {
                const payload = useOtp ? { email: formData.email, otp } : formData;
                const endpoint = useOtp ? "/auth/verify-otp" : "/auth/login";
                const res = await api.post(endpoint, payload);
                const { token, user } = res.data;
                login(user, token);
                setSuccess("✅ Login successful!");
                setTimeout(() => navigate("/dashboard"), 1500);
            } catch {
                setError("❌ Login failed.");
            }
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-glass-card">
                <div className="auth-left">
                <Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_jcikwtux.json"
  className="auth-lottie"
/>
                    <h2>{isRegistering ? "Join Farm IT 🌱" : "Welcome Back 🌾"}</h2>
                    <p>{isRegistering ? "Create your account and grow with us!" : "Login to manage your farm or invest in agriculture."}</p>
                    <button onClick={toggleMode} className="toggle-btn">
                        {isRegistering ? "Already have an account? Login 🔐" : "New here? Register 📝"}
                    </button>
                </div>

                <div className="auth-right">
                    <h2>{isRegistering ? "Create Account" : "Sign In"}</h2>
                    {error && <div className="auth-alert error">{error}</div>}
                    {success && <div className="auth-alert success">{success}</div>}

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {isRegistering && (
                            <>
                                <input type="text" name="firstName" placeholder="👤 First Name" required onChange={handleChange} />
                                <input type="text" name="lastName" placeholder="👤 Last Name" required onChange={handleChange} />
                            </>
                        )}

                        <input type="email" name="email" placeholder="📧 Email" required onChange={handleChange} />

                        {!useOtp && (
                            <input type="password" name="password" placeholder="🔒 Password" required onChange={handleChange} />
                        )}

                        {useOtp && !isRegistering && otpRequested && (
                            <input type="text" name="otp" placeholder="🔢 Enter OTP" required onChange={handleOtpChange} />
                        )}

                        {isRegistering && (
                            <>
                                <select name="role" required onChange={handleChange}>
                                    <option value="">Select Role</option>
                                    <option value="farmer">👨‍🌾 Farmer</option>
                                    <option value="investor">💼 Investor</option>
                                </select>
                                <input type="file" name="profilePic" accept="image/*" onChange={handleFileChange} />
                            </>
                        )}

                        <button type="submit" className="submit-btn">
                            {isRegistering ? "Register Now 🚀" : useOtp ? "Verify OTP ✅" : "Login 🔓"}
                        </button>
                    </form>

                    {!isRegistering && (
                        <div className="otp-toggle">
                            {!useOtp ? (
                                <button onClick={() => setUseOtp(true)}>Use OTP Login 🔄</button>
                            ) : (
                                <button onClick={requestOtp}>📩 Get OTP</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
