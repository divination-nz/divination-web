'use client';

import { Icon } from '@iconify/react';
import { type FC } from 'react';

interface BasicSearchBarProps {
  onEnter?: (value: string) => void;
}

export const BasicSearchBar: FC<BasicSearchBarProps> = ({ onEnter }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter?.(e.currentTarget.value);
    }
  };

  return (
    <div className='relative w-full'>
      <Icon
        className='absolute left-2 top-3'
        icon='material-symbols:search-rounded'
        width='24'
        height='24'
      />
      <input
        autoFocus
        className='h-12 w-full rounded-lg border-2 border-solid border-surface2 bg-mantle px-9 py-0.5 font-[family-name:var(--font-geist-sans)] text-lg text-text [outline:none] hover:border-text focus:border-text'
        type='text'
        onKeyDown={handleKeyDown}
        placeholder='Flying, haste, trample...'
      />
    </div>
  );
};
