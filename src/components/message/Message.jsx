import React from 'react';
import { MessageContainer } from './MessageStyle';

export default function Message({ theme, user }) {
  const themeDark = theme === 'dark' ? ' text-white ' : 'bg-transparent';
  return (
    <>
      {user === null && (
        <MessageContainer className={`${themeDark}`}>
          <h1 className={`text-3xl font-semibold`}>Welcome!</h1>
          <p className="text-lg mt-4">
            TodoApp is a note-taking application. To access the project, use the
            login: <stron className="font-semibold underline">demo</stron> and
            password: <stron className="font-semibold underline">demo</stron>.
          </p>
          <a
            className="mt-4 underline block"
            href="https://github.com/Genildocs/todoapp/tree/main"
            rel="noreferrer"
            target="_blank"
          >
            <p>
              Link repo gitHub: https://github.com/Genildocs/todoapp/tree/main
            </p>
          </a>
        </MessageContainer>
      )}
    </>
  );
}
