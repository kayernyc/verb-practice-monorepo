import { MainForm } from './mainform'

export const metadata = {
  title: 'database management'
}

export default async function Home() {
  return <main>
    Welcome to DB Management 
    <MainForm />
  </main>
}
