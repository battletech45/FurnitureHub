import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/context/authContext";
import "./loginStyle.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { authenticate, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    console.log("I AM HERE");
    e.preventDefault();
    await authenticate(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="login-label">
            Username or email address
          </label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-me-row">
          <input
            type="checkbox"
            id="rememberMe"
            className="remember-me-checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <label htmlFor="rememberMe" className="remember-me-text">
            Remember Me
          </label>
        </div>
        <div className="login-button-row">
          <button type="submit" className="login-button">
            Login
          </button>
          <p>Lost Your Password ?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
