import styled from 'styled-components';
import { useCallback, useContext, useState } from 'react';
import { EnvironmentContext } from '../../context/environment';
import { StyledForm } from './formStyles';

export const LogInForm = () => {
  const [token, setToken] = useContext(EnvironmentContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const submitHandler = useCallback(
    async (evt) => {
      evt.preventDefault();
      console.log({ token }, 1);

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

      setToken(result.accessToken || '');
    },
    [userName, userEmail, userPassword],
  );

  return (
    <StyledForm onSubmit={submitHandler}>
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
    </StyledForm>
  );
};
