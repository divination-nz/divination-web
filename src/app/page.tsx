import { Footer } from './footer';
import { userAgent } from 'next/server';
import { headers } from 'next/headers';
import { Divination } from './divination';

interface HomeParams {
  q?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<HomeParams>;
}) {
  const { q: query } = await searchParams;
  const { os } = userAgent({ headers: await headers() });

  return (
    <div className='flex flex-col items-center justify-between h-screen w-screen p-4 gap-2 overflow-hidden divide-y divide-solid divide-text font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col h-[calc(100vh-5rem)] w-full justify-center'>
        <Divination initialQuery={query} />
      </main>
      <Footer showCopyleftIcon={!os.name?.includes('Windows')} />
    </div>
  );
}
