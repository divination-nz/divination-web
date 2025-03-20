import { SearchClient } from './SearchClient';

interface SearchPageParams {
  q?: string;
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<SearchPageParams>;
}) {
  const { q: query } = await searchParams;

  return (
    <main className='flex h-[calc(100vh-5rem)] w-full flex-col justify-center'>
      <SearchClient initialQuery={query} />
    </main>
  );
}
