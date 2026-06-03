import React, { useState } from "react";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Validation
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password Validation
  // Minimum 8 chars, one special character
  const passwordValid =
    password.length >= 8 &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {email && !emailValid && (
            <p style={{ color: "red" }}>
              Invalid email format
            </p>
          )}
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {password && !passwordValid && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters and
              contain a special character.
            </p>
          )}
        </div>

        <br />

        <button
          type="submit"
          disabled={!(emailValid && passwordValid)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AuthForm;