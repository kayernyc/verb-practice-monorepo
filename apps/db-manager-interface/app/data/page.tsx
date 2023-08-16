'use client';

import { EnvironmentContext } from '../../context/environment';
import { useContext } from 'react';
import { redirect } from 'next/navigation';

const DataPage = () => {
  const [token] = useContext(EnvironmentContext);

  if (!token) {
    redirect('/');
  }

  const tryToHitTheService = async () => {
    const result = await (
      await fetch('http://localhost:3030/data', {
        method: 'post',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
    ).json();

    console.log({ result });
  };

  return (
    <>
      <h2>Actual Data management</h2>
      <p>what information do you want to see?</p>
      <button onClick={tryToHitTheService}>push me</button>
    </>
  );
};

export default DataPage;
