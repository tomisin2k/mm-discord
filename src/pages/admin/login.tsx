import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Simulate a login request (replace with actual API call)
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // Save the token to localStorage or context
      localStorage.setItem("adminToken", data.token);

      // Redirect to the admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #0a0a0a;
            color: #fff;
          }

          .login-form {
            background: rgba(10, 10, 10, 0.8);
            padding: 40px;
            border-radius: 16px;
            border: 1px solid rgba(128, 0, 128, 0.3);
            width: 100%;
            max-width: 400px;
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.2);
          }

          .login-form h2 {
            margin-bottom: 20px;
            font-size: 2em;
            text-align: center;
          }

          .input-field {
            width: 100%;
            padding: 15px;
            margin-bottom: 15px;
            background: rgba(10, 10, 10, 0.8);
            border: 1px solid rgba(128, 0, 128, 0.3);
            border-radius: 8px;
            color: #fff;
            font-size: 1em;
            transition: all 0.3s ease;
          }

          .input-field:focus {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
          }

          .login-button {
            width: 100%;
            padding: 15px;
            background: rgba(128, 0, 128, 0.8);
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .login-button:hover {
            background: rgba(128, 0, 128, 1);
          }

          .error-message {
            color: red;
            margin-bottom: 15px;
            text-align: center;
          }
        `}
      </style>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;