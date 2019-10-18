import React, { useRef } from "react";

const Login = () => {
  const usernmeRef = useRef();
  const passwordRef = useRef();

  const onLogin = () => {
    debugger
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
            ref={usernmeRef}
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
