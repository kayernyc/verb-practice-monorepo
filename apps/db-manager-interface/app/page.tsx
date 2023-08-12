import { MainForm } from './auth/mainform';

export const metadata = {
  title: 'database management',
};

export default async function Home() {
  return (
    <main>
      <MainForm />
    </main>
  );
}
