import { useContext } from 'react';
import { EnvironmentContext } from '../context/environment';
import Link from 'next/link';

export const MainHeader = () => {
  const [token, setToken] = useContext(EnvironmentContext);
  return (
    <header>
      DB Management
      {token && (
        <nav>
          <Link href={'/data'}>Data Management Interface</Link>
        </nav>
      )}
    </header>
  );
};
