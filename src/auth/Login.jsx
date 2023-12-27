import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-start gap-2 md:absolute relative ml-3 mt-5">
      <div>
        <label>Login: </label>
        <input className="block outline-none" type="text" />
      </div>
      <div>
        <label>Password: </label>
        <input className="block outline-none" type="password" />
      </div>
      <button className="bg-white py-2 px-10 mb-3 md:mb-0 hover:bg-gradient-to-r from-blue-400 to-purple-500">
        Login
      </button>
    </div>
  );
}
