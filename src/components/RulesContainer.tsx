'use client';

import { Rule } from '@/api/types';
import { FC } from 'react';
import { RulesEntry } from './RulesEntry';

interface RulesContainerProps {
  rules: Rule[];
}

export const RulesContainer: FC<RulesContainerProps> = ({ rules }) => {
  return (
    <div className='flex flex-col overflow-y-scroll overflow-x-hidden h-full w-full gap-2 p-2 border-solid border-2 border-black dark:border-white'>
      {rules.map((rule) => (
        <RulesEntry key={rule.id} rule={rule} />
      ))}
    </div>
  );
};
