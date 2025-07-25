import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/auth/sendotp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semail: user.email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      toast.success("OTP sent successfully!");
      setIsOtpSent(true);
    } catch (error) {
      toast.error("Error sending OTP: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isOtpSent) {
        const verifyResponse = await fetch(
          `http://localhost:8000/api/auth/verifyotp`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ otp, email: user.email }),
          }
        );

        const verifyData = await verifyResponse.json();
        if (!verifyResponse.ok)
          throw new Error(verifyData.message || "OTP verification failed");

        toast.success("OTP verified successfully!");
      } else {
        throw new Error("Please send and verify OTP first.");
      }

      const loginResponse = await fetch(
        `http://localhost:8000/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      const loginData = await loginResponse.json();
      if (!loginResponse.ok)
        throw new Error(loginData.message || "Login failed");

      storeTokenInLs(loginData.token, loginData.username);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Error during login: " + error.message);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="/images/ai-incident.jpg" alt="AI Vehicle Prediction" />
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <div className="otp-container">
              <button type="button" onClick={handleSendOTP}>
                Send OTP
              </button>
            </div>

            {isOtpSent && (
              <div className="form-group">
                <label>Enter OTP</label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};
