'use client';

import { GlossaryTerm } from '@/api/types';
import { GlossaryEntry } from '@/components/GlossaryEntry';
import { createGlossaryFilterRegExp } from '@/utility/glossaryFilterRegExp';
import { resetUrl, updateUrl } from '@/utility/urlHandling';
import { Icon } from '@iconify/react';
import { useState, type FC } from 'react';

interface GlossaryClientProps {
  glossaryTerms: GlossaryTerm[];
  initialFilter?: string;
}

export const GlossaryClient: FC<GlossaryClientProps> = ({
  glossaryTerms,
  initialFilter = '',
}) => {
  const [filter, setFilter] = useState<string>(initialFilter);

  const filteredGlossaryTerms = glossaryTerms.filter((term) => {
    const termText = term.term.toLowerCase();
    const descriptionText = term.description.toLowerCase();
    const regex = createGlossaryFilterRegExp(filter);
    return regex.test(termText) || regex.test(descriptionText);
  });

  const handleChange = (value: string) => {
    if (!value) {
      resetUrl();
    } else {
      updateUrl(value);
    }
    setFilter(value);
  };

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
          defaultValue={initialFilter}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className='flex w-full flex-wrap gap-2 overflow-x-hidden overflow-y-scroll border-2 border-solid border-text p-2'>
        {filteredGlossaryTerms.map((term, index) => (
          <GlossaryEntry
            key={index}
            title={term.term}
            description={term.description}
            markedText={filter}
          />
        ))}
        {filteredGlossaryTerms.length == 0 && (
          <div className='flex w-full items-center justify-center pt-4 text-center font-[family-name:var(--font-beleren)] text-9xl text-maroon'>
            ?
          </div>
        )}
      </div>
    </div>
  );
};
