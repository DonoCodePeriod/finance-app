import React from 'react';
import { useUserContext } from '../contexts/UserContext.tsx';

const Login = () => {
  const { login } = useUserContext();
  return (
    <form>
      <h1>Please log in</h1>
      <input name='username' type='text'></input>
      <input name='password' type='password'></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          login(e.target.username, e.target.password);
        }}>
        Log In
      </button>
    </form>
  );
};

export default Login;
