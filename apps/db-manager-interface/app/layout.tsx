'use client';
import StyledComponentsRegistry from '../utilities/registry';
import { MainHeader } from '../components/main-header';
import { EnvironmentContext } from '../context/environment';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState('');

  return (
    <EnvironmentContext.Provider value={[token, setToken]}>
      <html lang="en">
        <StyledComponentsRegistry>
          <body>
            <MainHeader />
            {children}
          </body>
        </StyledComponentsRegistry>
      </html>
    </EnvironmentContext.Provider>
  );
}
