import React from "react";

const Register = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter your email" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter your password" />
      <label htmlFor="reEnterPassword">Confirm Password</label>
      <input type="password" placeholder="Confrim your password" />
    </form>
  );
};

export default Register;
