import styled from 'styled-components';
import { useCallback, useContext, useState } from 'react';
import { EnvironmentContext } from '../../context/environment';
import { RoleEnum } from '../../types/Roles';
import { StyledForm } from './formStyles';

export const SignUpForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  // const [userRole, setUserRole] = useState<RoleEnum | undefined>(undefined);

  const submitHandler = useCallback(
    async (evt) => {
      //   evt.preventDefault();
      //   const body = {
      //     name: userName,
      //     email: userEmail,
      //     role: userRole,
      //   };
      //   const result = await (
      //     await fetch('http://localhost:3030/auth/signup', {
      //       method: 'post',
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       body: JSON.stringify(body),
      //     })
      //   ).json();
      //   console.log({ result });
    },
    [userName, userEmail],
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
      <label htmlFor="role-selection">Choose a role:</label>
      <select name="roles" id="role-selection">
        <option value="">--Please choose an option--</option>
        <option value={RoleEnum.ADMIN}>Admin</option>
        <option value={RoleEnum.GERMAN}>German</option>
        <option value={RoleEnum.FRENCH}>French</option>
        <option value={RoleEnum.ENGLISH}>English</option>
        <option value={RoleEnum.DBA}>DBA</option>
      </select>
      <button type="submit">Submit</button>
    </StyledForm>
  );
};
