import React, { useState } from 'react';
import { useUserContext } from '../contexts/UserContext.tsx';

const Login = (): JSX.Element => {
  const { attemptLogin } = useUserContext();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        attemptLogin(username, password);
      }}>
      <h1>Please log in</h1>
      <input
        name='username'
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        value={username}></input>
      <input
        name='password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}></input>
      <button>Log In</button>
    </form>
  );
};

export default Login;
