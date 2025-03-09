'use client';

import { getRulesByQuery } from '@/api/getRulesByQuery';
import { Rule } from '@/api/types';
import { RulesContainer } from '@/components/RulesContainer';
import { SearchBar } from '@/components/SearchBar';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

const MIN_LENGTH = 3;

export const Divination: FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    async function fetchRules() {
      const rules = await getRulesByQuery(searchQuery);
      if (rules.length > 0) setRules(rules);
    }

    fetchRules();
  }, [searchQuery]);

  const handleTypingComplete = (query: string) => {
    if (query.length >= MIN_LENGTH) {
      setSearchQuery(query);
    }
  };

  const handleChange = (value: string) => {
    if (!value) setRules([]);
  };

  return (
    <div className='flex flex-col sm:flex-row flex-grow h-full w-full gap-4 items-stretch justify-start sm:justify-around'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image
          aria-hidden
          className='hidden sm:block invert dark:invert-0'
          src='/planeswalker-book.svg'
          alt='Planeswalker Symbol on a Closed Book'
          width={150}
          height={150}
        />
        <h1 className='text-7xl font-[family-name:var(--font-beleren)]'>
          {'Divination'}
        </h1>
        <SearchBar
          onTypingComplete={handleTypingComplete}
          onChange={handleChange}
        />
      </div>
      {!!rules.length && <RulesContainer rules={rules} />}
    </div>
  );
};
