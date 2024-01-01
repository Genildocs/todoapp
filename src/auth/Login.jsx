import React, { useState } from "react";

export default function Login({
  handleLogin,
  user,
  username,
  setUsername,
  password,
  setPassword,
  errorMessage,
}) {
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedNoteappUser");
    window.location.reload();
    setUser(null);
  };

  return (
    <>
      {user === null ? (
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-start gap-2 md:absolute relative ml-3 mt-5"
        >
          {visible && (
            <div>
              <div>
                <label>Username: </label>
                <input
                  className="block outline-none"
                  type="text"
                  value={username}
                  name="Username"
                  onChange={({ target }) => setUsername(target.value)}
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
                {user === null && (
                  <p className=" font-bold text-red-600">{errorMessage}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-white py-1 px-5 mt-3 md:mb-0 hover:bg-gradient-to-r from-blue-400 to-purple-500"
                >
                  Login
                </button>
              </div>
            </div>
          )}
          {!visible && (
            <div>
              <button
                onClick={() => setVisible(!visible)}
                className="bg-white py-1 px-5 mb-3 md:mb-0 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              >
                Login
              </button>
            </div>
          )}
        </form>
      ) : (
        <div className="flex flex-col items-start gap-2 md:absolute relative ml-3 mt-5">
          <p className="text-white">User logged: {user.username}</p>
          <button
            onClick={handleLogout}
            className="bg-white py-1 px-5 mb-3 md:mb-0 hover:bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
