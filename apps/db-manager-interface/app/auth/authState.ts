import { createContext } from 'react';

import { AuthState } from './mainform';

export const AuthContext = createContext<
  [AuthState, Dispatch<SetStateAction<AuthState>>]
>(AuthState.LOGIN); //<
