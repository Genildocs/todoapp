import React, { useState } from 'react';
import loginService from '../service/loginService';

export default function Login({ setlogin }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, serUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setlogin(user);
      serUsername('');
      setPassword('');
    } catch (exception) {
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-start gap-2 md:absolute relative ml-3 mt-5"
    >
      <div>
        <label>Login: </label>
        <input
          className="block outline-none"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => serUsername(target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          className="block outline-none"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-white py-2 px-10 mb-3 md:mb-0 hover:bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Login
      </button>
      {user === null && <p className=" text-red-600">{errorMessage}</p>}
    </form>
  );
}
