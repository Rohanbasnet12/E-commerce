import React from "react";

const Login = () => {
  return (
    <form id="login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your Email"
        required
        autoComplete="off"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your Password"
        required
        autoComplete="off"
      />
    </form>
  );
};

export default Login;
