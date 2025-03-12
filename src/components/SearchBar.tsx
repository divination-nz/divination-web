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
        className='absolute top-3 left-2'
        icon='material-symbols:search-rounded'
        width='24'
        height='24'
      />
      <input
        autoFocus={!defaultValue}
        defaultValue={defaultValue}
        className='font-[family-name:var(--font-geist-mono)] text-lg text-text bg-mantle px-9 py-0.5 rounded-lg [outline:none] border-2 border-solid border-surface2 hover:border-text focus:border-text w-full h-12'
        type='text'
        onChange={handleChange}
        placeholder='Flying, haste, trample...'
      />
    </div>
  );
};
