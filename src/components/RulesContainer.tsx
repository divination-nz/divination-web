import { FC } from 'react';

export const RulesContainer: FC = () => {
  return (
    <div className='flex flex-col flex-grow w-full gap-2 p-2 border-solid border-2 border-black dark:border-white'>
      <div className='flex flex-col h-24 gap-2 items-center border-solid border-2 border-black dark:border-white'>
        {'Rule 1'}
      </div>
      <div className='flex flex-col h-24 gap-2 items-center border-solid border-2 border-black dark:border-white'>
        {'Rule 2'}
      </div>
    </div>
  );
};
