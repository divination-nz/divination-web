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
    <div className='flex h-screen w-screen flex-col items-center justify-between gap-2 divide-y divide-solid divide-text overflow-hidden p-4 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex h-[calc(100vh-5rem)] w-full flex-col justify-center'>
        <Divination initialQuery={query} />
      </main>
      <Footer showCopyleftIcon={!os.name?.includes('Windows')} />
    </div>
  );
}
