'use client';

import { Icon } from '@iconify/react';
import { debounce } from 'radash';
import { type FC } from 'react';

const INPUT_DELAY = 300;

export interface SearchBarProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onTypingComplete?: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  defaultValue = '',
  onChange,
  onTypingComplete,
}) => {
  const debounceChange = debounce({ delay: INPUT_DELAY }, (value) =>
    handleTypingComplete(value)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    debounceChange(e.target.value);
  };

  const handleTypingComplete = (value: string) => {
    if (value.length > 0) {
      onTypingComplete?.(value);
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
        autoFocus={!defaultValue}
        defaultValue={defaultValue}
        className='h-12 w-full rounded-lg border-2 border-solid border-surface2 bg-mantle px-9 py-0.5 font-[family-name:var(--font-geist-sans)] text-lg text-text [outline:none] hover:border-text focus:border-text'
        type='text'
        onChange={handleChange}
        placeholder='Flying, haste, trample...'
      />
      <select className='absolute right-3 h-full border-l-2 border-surface2 bg-transparent pl-2 text-right'>
        <option className='h-full p-2'>TEXT</option>
        <option className='h-full border-r-2 border-surface2 p-2'>ID</option>
      </select>
    </div>
  );
};
