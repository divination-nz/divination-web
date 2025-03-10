import { Rule } from '@/api/types';
import { Icon } from '@iconify/react';
import { FC } from 'react';

interface RulesEntryProps {
  rule: Rule;
  markedText?: string;
}

const constructRulesUrl = (rule: Rule) => {
  // Convoluted way to differentiate between
  // - 101.1
  // - 104.3a
  // since the actual ID in the rulebook for the former is 101.1. (with the dot)
  const formattedId = rule.id.charAt(rule.id.length - 1).match(/[a-z]/)
    ? rule.id
    : `${rule.id}.`;

  return `https://rules.cardspy.nz/#:~:text=${encodeURIComponent([formattedId, rule.description].join(' '))}`;
};

export const RulesEntry: FC<RulesEntryProps> = ({ rule, markedText }) => {
  console.log({ markedText });

  const rulesUrl = constructRulesUrl(rule);
  const ruleDescription = !!markedText
    ? rule.description.replace(
        new RegExp(`(${markedText})`, 'gi'),
        '<mark>$1</mark>'
      )
    : rule.description;

  return (
    <div className='relative flex-shrink-0 w-full min-h-16 sm:min-h-20 border-solid border-2 border-black dark:border-white'>
      <div className='absolute top-0 right-0 flex justify-center text-sm sm:text-base sm:leading-6 text-mantle bg-blue h-full font-bold [writing-mode:sideways-lr]'>
        {rule.id}
      </div>
      <div className='flex flex-col items-start justify-between h-full w-full py-1 pl-1 pr-6 sm:pr-7 text-sm sm:text-[1rem] sm:leading-6'>
        <div dangerouslySetInnerHTML={{ __html: ruleDescription }} />
        <div className='text-blue'>
          <a
            href={rulesUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1'
          >
            Open in rulebook
            <Icon icon='tabler:external-link' />
          </a>
        </div>
      </div>
    </div>
  );
};
