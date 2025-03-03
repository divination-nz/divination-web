import { Footer } from './footer';
import { userAgent } from 'next/server';
import { headers } from 'next/headers';
import { Divination } from './divination';

export default async function Home() {
  const { os } = userAgent({ headers: await headers() });

  return (
    <div className='flex flex-col items-center justify-between min-h-screen w-screen p-4 gap-2 divide-y divide-solid divide-black dark:divide-white font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col w-full h-full flex-grow justify-center'>
        <Divination />
      </main>
      <Footer showCopyleftIcon={!os.name?.includes('Windows')} />
    </div>
  );
}
