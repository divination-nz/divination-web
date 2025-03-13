import { type Rule } from '@/api/types';
import { Icon } from '@iconify/react';
import { type FC } from 'react';

interface RulesEntryProps {
  rule: Rule;
  markedText?: string;
}

const constructRulesUrl = (rule: Rule) => {
  return `https://rules.cardspy.nz/#:~:text=${encodeURIComponent([rule.id, rule.description].join(' '))}`;
};

export const RulesEntry: FC<RulesEntryProps> = ({ rule, markedText }) => {
  console.log({ markedText });

  const rulesUrl = constructRulesUrl(rule);
  const ruleDescription = !!markedText
    ? rule.description.replace(
        new RegExp(`\\b(${markedText})\\b`, 'gi'),
        '<mark>$1</mark>'
      )
    : rule.description;

  return (
    <div className='relative min-h-16 w-full flex-shrink-0 border-2 border-solid border-text sm:min-h-20'>
      <div className='absolute right-0 top-0 flex h-full justify-center bg-blue text-sm font-bold text-mantle [writing-mode:sideways-lr] sm:text-base sm:leading-6'>
        {rule.id}
      </div>
      <div className='flex h-full w-full flex-col items-start justify-between py-1 pl-1 pr-6 text-sm sm:pr-7 sm:text-[1rem] sm:leading-6'>
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
