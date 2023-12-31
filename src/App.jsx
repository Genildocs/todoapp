import React, { useState, useEffect } from 'react';
import notesService from './service/notesService';
import loginService from './service/loginService';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Login from './auth/Login';
import Message from './components/message/Message';
export default function App() {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      const user = await loginService.login({ username, password });
      setLoad(false);
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));

      notesService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (exception) {
      setLoad(false);
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      notesService.setToken(user.token);
    }
  }, []);

  return (
    <>
      <div
        className={`${theme} relative pt-6 pl-6 pr-6 min-h-screen md:grid md:auto-rows-max md:grid-cols-md md:justify-center`}
      >
        <Nav toggleTheme={toggleTheme} theme={theme} />
        <Login
          handleLogin={handleLogin}
          user={user}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          load={load}
        />
        <Todo theme={theme} user={user} />
        <Message theme={theme} user={user} />
      </div>
    </>
  );
}
