'use client';

import { GlossaryTerm } from '@/api/types';
import { GlossaryEntry } from '@/components/GlossaryEntry';
import { Icon } from '@iconify/react';
import { type FC } from 'react';

interface GlossaryClientProps {
  glossaryTerms: GlossaryTerm[];
}

export const GlossaryClient: FC<GlossaryClientProps> = ({ glossaryTerms }) => {
  return (
    <div className='flex h-full w-full flex-col gap-2'>
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
        {glossaryTerms.map((term, index) => (
          <GlossaryEntry
            key={index}
            title={term.term}
            description={term.description}
          />
        ))}
      </div>
    </div>
  );
};
