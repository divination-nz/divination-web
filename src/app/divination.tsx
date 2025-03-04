'use client';

import { getRulesByQuery } from '@/api/getRulesByQuery';
import { Rule } from '@/api/types';
import { RulesContainer } from '@/components/RulesContainer';
import { SearchBar } from '@/components/SearchBar';
import { FC, useEffect, useState } from 'react';

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
    <div className='flex flex-row flex-grow h-full w-full gap-2 items-stretch justify-around'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-7xl'>{'Divination'}</h1>
        <h2 className='text-3xl'>{'Search the rules!'}</h2>
        <SearchBar
          onTypingComplete={handleTypingComplete}
          onChange={handleChange}
        />
      </div>
      <RulesContainer rules={rules} />
    </div>
  );
};
