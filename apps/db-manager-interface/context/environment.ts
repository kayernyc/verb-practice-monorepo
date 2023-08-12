import { createContext } from 'react';
import { AuthState } from '../types/AuthState';

export const EnvironmentContext =
  createContext<[AuthState, Dispatch<SetStateAction<AuthState>>]>();
