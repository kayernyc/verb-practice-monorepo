'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

const SignInForm = styled.form`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 2rem;

  > * {
    display: block;
  }

  > label {
    margin-top: 1rem;
  }

  > input {
    width: 100%;
  }
`;

export const MainForm = (): JSX.Element => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const submitHandler = useCallback(
    async (evt) => {
      evt.preventDefault();

      const body = {
        name: userName,
        email: userEmail,
        password: userPassword,
      };

      const result = await (
        await fetch('http://localhost:3030/auth/signin', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(body),
        })
      ).json();

      console.log({ result });
    },
    [userName, userEmail, userPassword],
  );

  return (
    <SignInForm onSubmit={submitHandler}>
      <label htmlFor="user-name" placeholder="Your account name">
        User name
      </label>
      <input
        id="user-name"
        type="text"
        required
        value={userName}
        onChange={(evt) => {
          setUserName(evt.target.value);
          console.log(userName);
        }}
      />
      <label htmlFor="user-email" placeholder="Your account email">
        User email
      </label>
      <input
        id="user-email"
        type="email"
        value={userEmail}
        required
        onChange={(evt) => {
          setUserEmail(evt.target.value);
        }}
      />
      <label htmlFor="user-pw" placeholder="Your password">
        Password
      </label>
      <input
        id="user-pw"
        type="password"
        value={userPassword}
        required
        onChange={(evt) => {
          setUserPassword(evt.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </SignInForm>
  );
};
