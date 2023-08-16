'use client';

import styled from 'styled-components';
import { useCallback, useContext, useState } from 'react';
import { EnvironmentContext } from '../../context/environment';
import { LogInForm } from './logInForm';
import { SignUpForm } from './signupForm';
import { AuthState } from '../../types/AuthState';

export enum AuthResponse {
  ERROR = 'error',
  FROZEN = 'frozen',
  LOADING = 'loading',
}

const strategy: Record<AuthState, JSX.Element> = {
  [AuthState.LOGIN]: <LogInForm />,
};

export const MainForm = (): JSX.Element => {
  const [formState, setFormState] = useState(AuthState.LOGIN);

  return (
    <section>
      <form>
        <fieldset>
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="radio"
            name="auth"
            value="login"
            defaultChecked={formState === AuthState.LOGIN}
            onChange={(evt) => {
              setFormState(AuthState.LOGIN);
            }}
          />
          <label htmlFor="signup">Sign Up</label>
          <input
            id="signup"
            type="radio"
            name="auth"
            value="signup"
            onChange={(evt) => {
              setFormState(AuthState.SIGNUP);
            }}
          />
        </fieldset>
      </form>
      {formState === AuthState.LOGIN && <LogInForm />}
      {formState === AuthState.SIGNUP && <SignUpForm />}
    </section>
  );
};
