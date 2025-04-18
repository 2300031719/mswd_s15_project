import axios from "axios";
import React, { useState } from "react";

export const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    role: "User",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmpassword) {
      alert("Password and Confirm Password did not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { message } = response.data; // Corrected destructuring
      alert(message);
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required
        />
        <br />
        <input
          type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required
/>
        <br />
        <input
          type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required
        />
        <br />
        <input
          type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required
        />
        <br />
        <input
          type="password" name="confirmpassword" placeholder="Confirm Password" value={user.confirmpassword} onChange={handleChange} required
        />
        <br />
        <select name="role" value={user.role} onChange={handleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};