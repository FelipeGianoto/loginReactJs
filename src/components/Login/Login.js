import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8085/user/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return (

    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <button class="button-submit" type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};