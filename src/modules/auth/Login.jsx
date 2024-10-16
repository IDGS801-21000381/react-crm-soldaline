// src/modules/auth/Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="wrapper">
      <form>
        <p className="form-login">Login</p>
        <div className="input-box">
          <input required placeholder="Usuario" type="text" />
        </div>
        <div className="input-box">
          <input required placeholder="Contraseña" type="password" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
