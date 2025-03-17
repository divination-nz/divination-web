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

  return (
    <main className='flex h-[calc(100vh-5rem)] w-full flex-col justify-center'>
      <Divination initialQuery={query} />
    </main>
  );
}
