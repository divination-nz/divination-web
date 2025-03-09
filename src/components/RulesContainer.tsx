'use client';

import { Rule } from '@/api/types';
import { FC } from 'react';
import { RulesEntry } from './RulesEntry';
import { LoadingImage } from './LoadingImage';

interface RulesContainerProps {
  rules: Rule[];
  loading?: boolean;
}

export const RulesContainer: FC<RulesContainerProps> = ({ rules, loading }) => {
  return (
    <div
      className={`flex flex-col ${loading && 'items-center justify-center'} overflow-y-scroll overflow-x-hidden h-full w-full gap-2 p-2 border-solid border-2 border-black dark:border-white`}
    >
      {loading && (
        <div className='flex flex-col items-center justify-center gap-2'>
          <LoadingImage />
          <p className='text-xl sm:text-2xl font-bold italic'>Loading...</p>
        </div>
      )}
      {!loading &&
        rules.map((rule) => <RulesEntry key={rule.id} rule={rule} />)}
    </div>
  );
};
