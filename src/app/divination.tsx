'use client';

import { getRulesByQuery } from '@/api/getRulesByQuery';
import { Rule } from '@/api/types';
import { RulesContainer } from '@/components/RulesContainer';
import { SearchBar } from '@/components/SearchBar';
import { FC, useCallback, useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import { Loading } from '@/components/Loading';
import { RulesEntry } from '@/components/RulesEntry';
import { NoResults } from '@/components/NoResults';

const MIN_QUERY_LENGTH = 3;

const updateUrl = (query: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set('q', query);
  window.history.pushState({}, '', url.toString());
};

const resetUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete('q');
  window.history.pushState({}, '', url.toString());
};

interface DivinationProps {
  initialQuery?: string;
}

export const Divination: FC<DivinationProps> = ({ initialQuery = '' }) => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [isPending, startTransition] = useTransition();

  const reset = () => {
    setRules([]);
    setSearchQuery('');
    resetUrl();
  };

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
      updateUrl(query);
    }
  };

  const handleChange = (value: string) => {
    if (!value) {
      reset();
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
          defaultValue={searchQuery}
          onTypingComplete={handleTypingComplete}
          onChange={handleChange}
        />
      </div>
      {searchQuery.length > 0 && (
        <RulesContainer centreContents={isPending}>
          {isPending && <Loading />}
          {!isPending && rules.length === 0 && <NoResults />}
          {!isPending &&
            rules.map((rule) => (
              <RulesEntry key={rule.id} rule={rule} markedText={searchQuery} />
            ))}
        </RulesContainer>
      )}
    </div>
  );
};
