import { Rule } from '@/api/types';
import { Icon } from '@iconify/react';
import { FC } from 'react';

interface RulesEntryProps {
  rule: Rule;
}

const constructRulesUrl = (rule: Rule) => {
  // Convoluted way to differentiate between
  // - 101.1
  // - 104.3a
  // since the actual ID in the rulebook for the former is 101.1. (with the dot)
  const formattedId = rule.id.charAt(rule.id.length - 1).match(/[a-z]/)
    ? rule.id
    : `${rule.id}.`;

  return `https://rules.cardspy.nz/#:~:text=${encodeURI([formattedId, rule.description].join(' '))}`;
};

export const RulesEntry: FC<RulesEntryProps> = ({ rule }) => {
  const rulesUrl = constructRulesUrl(rule);

  return (
    <div className='flex flex-col justify-between flex-shrink-0 gap-2 min-h-16 sm:min-h-24 relative items-start border-solid border-2 border-black dark:border-white'>
      <div className='absolute top-0 flex justify-center text-sm sm:text-base bg-slate-300 dark:bg-slate-500 h-full font-bold [writing-mode:vertical-lr]'>
        {rule.id}
      </div>
      <div className='py-2 pl-6 sm:pl-7 text-sm sm:text-base'>
        {rule.description}
      </div>
      <div className='pl-6 sm:pl-7 text-sm sm:text-base text-blue-400'>
        <a
          href={rulesUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1'
        >
          See in rulebook
          <Icon icon='tabler:external-link' />
        </a>
      </div>
    </div>
  );
};
