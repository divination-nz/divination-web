'use client';

import { Rule } from '@/api/types';
import { FC } from 'react';

interface RulesContainerProps {
  rules: Rule[];
}

export const RulesContainer: FC<RulesContainerProps> = ({ rules }) => {
  return (
    <div className='flex flex-col overflow-scroll w-full gap-2 p-2 border-solid border-2 border-black dark:border-white'>
      {rules.map((rule) => (
        <div
          key={rule.id}
          className='flex flex-col flex-shrink-0 min-h-24 p-2 items-start border-solid border-2 border-black dark:border-white'
        >
          {rule.description}
        </div>
      ))}
    </div>
  );
};
