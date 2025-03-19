import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        navigate("/login");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow w-100  border-info" style={{ maxWidth: "400px" }}>
                         <h2 className="text-center fw-semibold fs-4"><span class='badge   text-dark bg-primary fw-7 fs-3'>Sign</span >  <span class='badge bg-light text-dark border border-primary text-info fw-7 fs-3'>UP</span></h2>

                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                             <button type="submit" className="btn btn-dark btn-outline-primary w-100">Sign Up</button>
                    </form>
                <p className="text-center mt-3">Already have an account? <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span></p>
            </div>
        </div>
    );
};

export default Signup;












// i