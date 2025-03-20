import { HomeClient } from './HomeClient';

export default async function Home() {
  return (
    <main className='flex h-[calc(100vh-5rem)] w-full flex-col justify-center'>
      <HomeClient />
    </main>
  );
}
