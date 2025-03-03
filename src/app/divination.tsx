import { RulesContainer } from '@/components/RulesContainer';
import { FC } from 'react';

export const Divination: FC = () => {
  return (
    <div className='flex flex-row flex-grow gap-2 items-stretch justify-around'>
      <div className='flex flex-col flex-grow gap-2 items-center justify-center'>
        <h1 className='text-7xl'>{'Divination'}</h1>
        <h2 className='text-3xl'>{'Search the rules!'}</h2>
        <input
          className='min-w-96 text-lg text-white dark:text-black px-2 border-black dark:border-white border-solid border-2'
          placeholder='Search...'
        />
      </div>
      <RulesContainer />
    </div>
  );
};
