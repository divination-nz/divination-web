import { GlossaryEntry } from '@/components/GlossaryEntry';
import { Icon } from '@iconify/react';

const GlossaryEntryExample = () => {
  const title = 'Ability';
  const description =
    '1. Text on an object that explains what that object does or can do.\n2. An activated or triggered ability on the stack. This kind of ability is an object.\nSee rule 113, “Abilities,” and section 6, “Spells, Abilities, and Effects.”\n';

  return <GlossaryEntry title={title} description={description} />;
};

export default async function Glossary() {
  return (
    <main className='flex w-full flex-col items-start justify-start gap-2 overflow-y-scroll lg:px-48'>
      <h1 className='w-full font-[family-name:var(--font-beleren)] text-6xl text-blue sm:text-center sm:text-7xl'>
        {'Glossary'}
      </h1>
      <div className='relative w-full'>
        <Icon
          className='absolute left-2 top-3'
          icon='material-symbols:search-rounded'
          width='24'
          height='24'
        />
        <input
          autoFocus
          className='h-12 w-full rounded-lg border-2 border-solid border-surface2 bg-mantle px-9 py-0.5 font-[family-name:var(--font-geist-sans)] text-lg text-text [outline:none] hover:border-text focus:border-text'
          type='text'
          placeholder='APNAP, keyword ability, subtype...'
        />
      </div>
      <div className='flex w-full flex-wrap gap-2 overflow-x-hidden overflow-y-scroll border-2 border-solid border-text p-2'>
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
        <GlossaryEntryExample />
      </div>
    </main>
  );
}
