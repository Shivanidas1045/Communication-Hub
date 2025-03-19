import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.email || !formData.password) {
          setError("All fields are required");
          return;
      }
      setError("");
      navigate("/");
  };

  return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow w-100 border-info" style={{ maxWidth: "400px" }}>
          <h2 className="text-center fw-semibold fs-4"><span class='badge   text-dark bg-primary fw-7 fs-3'>Log</span >  <span class='badge bg-light text-dark border border-primary text-info fw-7 fs-3'>In</span></h2>

              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email"
                       name="email"
                       placeholder="Enter your email.."
                        className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" name="password"
                      placeholder="Enter your password..."
                       className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                           <button type="submit" className="btn btn-dark btn-outline-primary w-100">Login</button>

              </form>
              <p className="text-center mt-3">Don't have an account? <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>Sign Up</span></p>
          </div>
      </div>
  );
};
export default Login;





