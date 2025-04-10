import { getGlossary } from '@/api/getGlossary';
import { GlossaryClient } from './GlossaryClient';

export default async function Glossary() {
  const glossaryTerms = await getGlossary();

  return (
    <main className='flex h-[calc(100vh-5rem)] w-full lg:px-48'>
      <GlossaryClient glossaryTerms={glossaryTerms} />
    </main>
  );
}
