import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Registration</h2>

       
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
        </div>

        <div className="gender-group">
          <label>Gender</label>
          <div className="genders">
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Prefer not to say</label>
          </div>
        </div>
        <button className="btn-reg">Register</button>
      </form>
    </div>
  );
};

export default SignUp;