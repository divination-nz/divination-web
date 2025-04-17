import { getGlossary } from '@/api/getGlossary';
import { GlossaryClient } from './GlossaryClient';

interface GlossaryPageParams {
  q?: string;
}

export default async function Glossary({
  searchParams,
}: {
  searchParams: Promise<GlossaryPageParams>;
}) {
  const glossaryTerms = await getGlossary();
  const { q: filter } = await searchParams;

  return (
    <main className='flex h-[calc(100vh-5rem)] w-full lg:px-48'>
      <GlossaryClient glossaryTerms={glossaryTerms} initialFilter={filter} />
    </main>
  );
}
