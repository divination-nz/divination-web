'use client';

import { useContext, type FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BasicSearchBar } from '@/components/BasicSearchBar';
import { MenuContext } from '@/components/MenuProvider';

export const HomeClient: FC = () => {
  const router = useRouter();
  const { setIsOpen } = useContext(MenuContext);

  const handleEnter = (query: string) => {
    setIsOpen(false);
    router.push('/search?q=' + query);
  };

  return (
    <div className='flex h-full w-full flex-grow items-stretch justify-around'>
      <div className='mt-[-5rem] flex flex-col items-center justify-center gap-4 sm:mt-0'>
        <Image
          aria-hidden
          src='/divination-logo.svg'
          alt='Planeswalker Symbol on a Closed Book'
          width={150}
          height={150}
        />
        <h1 className='font-[family-name:var(--font-beleren)] text-7xl text-blue'>
          {'Divination'}
        </h1>
        <BasicSearchBar onEnter={handleEnter} />
      </div>
    </div>
  );
};
