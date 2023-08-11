'use client';
import StyledComponentsRegistry from '../utilities/registry';
import { MainHeader } from '../components/main-header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <MainHeader />
          {children}    
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}