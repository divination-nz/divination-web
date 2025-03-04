import { Rule } from '@/api/types';
import { FC } from 'react';

interface RulesEntryProps {
  rule: Rule;
}

export const RulesEntry: FC<RulesEntryProps> = ({ rule }) => (
  <div className='flex flex-shrink-0 gap-2 min-h-16 sm:min-h-24 relative items-start border-solid border-2 border-black dark:border-white'>
    <div className='absolute top-0 flex justify-center text-sm sm:text-base bg-slate-300 dark:bg-slate-500 h-full font-bold [writing-mode:vertical-lr]'>
      {rule.id}
    </div>
    <div className='py-2 pl-6 sm:pl-7 text-sm sm:text-base'>
      {rule.description}
    </div>
  </div>
);
