import React, { useRef } from "react";
import axios from 'axios';

const Login = props => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onLogin = () => {
    axios
      .post('http://localhost:5000/api/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        props.history.push('/bubbles');
      })
      .catch(error => {
        debugger
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id='username'
            ref={usernameRef}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            id='password'
            ref={passwordRef}
          />
        </label>
        <button onClick={onLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
