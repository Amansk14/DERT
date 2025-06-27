import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <div className="links">
        
          <p>
            Don't have an account? <a href="#"><strong>Sign up</strong></a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;