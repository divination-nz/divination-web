'use client';

import { getRulesByQuery } from '@/api/getRulesByQuery';
import { Rule } from '@/api/types';
import { RulesContainer } from '@/components/RulesContainer';
import { SearchBar } from '@/components/SearchBar';
import { FC, useCallback, useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import { LoadingImage } from '@/components/LoadingImage';
import { RulesEntry } from '@/components/RulesEntry';
import { NoResults } from '@/components/NoResults';

const MIN_QUERY_LENGTH = 3;

export const Divination: FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const fetchRules = useCallback(() => {
    startTransition(async () => {
      const rules = await getRulesByQuery(searchQuery);
      setRules(rules);
    });
  }, [searchQuery]);

  useEffect(() => {
    fetchRules();
  }, [searchQuery, fetchRules]);

  const handleTypingComplete = (query: string) => {
    if (query.length >= MIN_QUERY_LENGTH) {
      setSearchQuery(query);
    }
  };

  const handleChange = (value: string) => {
    if (!value) {
      setRules([]);
      setSearchQuery('');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row flex-grow h-full w-full gap-4 items-stretch justify-start sm:justify-around'>
      <div className='flex flex-col gap-4 sm:mx-10 items-center justify-center'>
        <Image
          aria-hidden
          className='hidden sm:block'
          src='/planeswalker-book.svg'
          alt='Planeswalker Symbol on a Closed Book'
          width={150}
          height={150}
        />
        <h1 className='text-7xl font-[family-name:var(--font-beleren)] text-blue'>
          {'Divination'}
        </h1>
        <SearchBar
          onTypingComplete={handleTypingComplete}
          onChange={handleChange}
        />
      </div>
      {searchQuery.length > 0 && (
        <RulesContainer centreContents={isPending}>
          {!isPending && rules.length === 0 && <NoResults />}
          {isPending && (
            <div className='flex flex-col items-center justify-center gap-2'>
              <LoadingImage />
              <p className='text-xl sm:text-2xl font-bold italic'>Loading...</p>
            </div>
          )}
          {!isPending &&
            rules.map((rule) => <RulesEntry key={rule.id} rule={rule} />)}
        </RulesContainer>
      )}
    </div>
  );
};
