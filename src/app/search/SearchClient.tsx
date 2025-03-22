'use client';

import { getRulesByQuery } from '@/api/getRulesByQuery';
import { type Rule } from '@/api/types';
import { RulesContainer } from '@/components/RulesContainer';
import { SearchBar } from '@/components/SearchBar';
import {
  type FC,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from 'react';
import Image from 'next/image';
import { Loading } from '@/components/Loading';
import { RulesEntry } from '@/components/RulesEntry';
import { NoResults } from '@/components/NoResults';
import { useRouter } from 'next/navigation';

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

interface SearchClientProps {
  initialQuery?: string;
}

export const SearchClient: FC<SearchClientProps> = ({ initialQuery = '' }) => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

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
    const trimmedQuery = query.trim();
    if (trimmedQuery.length >= MIN_QUERY_LENGTH) {
      setSearchQuery(trimmedQuery);
      updateUrl(trimmedQuery);
    }
  };

  const handleChange = (value: string) => {
    if (!value) {
      reset();
    }
  };

  return (
    <div className='flex h-full w-full flex-grow flex-col items-stretch justify-start gap-4 sm:flex-row sm:justify-around'>
      <div className='flex flex-col items-center justify-center gap-4 sm:mx-10'>
        <Image
          aria-hidden
          className='hidden sm:block'
          src='/divination-logo.svg'
          alt='Planeswalker Symbol on a Closed Book'
          width={150}
          height={150}
        />
        <h1
          className='w-full cursor-pointer font-[family-name:var(--font-beleren)] text-6xl text-blue sm:text-7xl'
          onClick={() => router.push('/')}
        >
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
