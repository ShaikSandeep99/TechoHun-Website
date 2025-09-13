import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    dob: "",
    gender: "",
    type: "",
    address: "",
    password: "",
    confirmPassword: "",
    photo: null,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Validate photo size (250KB)
    if (formData.photo && formData.photo.size > 250 * 1024) {
      alert("Photo must be less than 250KB!");
      return;
    }

    // ✅ Validate resume size (5MB)
    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      alert("Resume must be less than 5MB!");
      return;
    }

    console.log("Registration Data:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="title">Create Account</h2>

        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>WhatsApp Phone</label>
        <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>

        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <label>Upload Photo (max 250KB)</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} required />

        <label>Upload Resume (PDF, max 5MB)</label>
        <input type="file" name="resume" accept="application/pdf" onChange={handleChange} required />

        {/* ✅ Styled Register Button */}
        <button type="submit" className="btn">
          Register
        </button>

        <p className="switch-text">
          Already have an account? <Link to="/auth">Login</Link>
        </p>
      </form>
    </div>
  );
}
