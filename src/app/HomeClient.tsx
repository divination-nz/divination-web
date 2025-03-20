'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BasicSearchBar } from '@/components/BasicSearchBar';

export const HomeClient: FC = () => {
  const router = useRouter();

  const handleEnter = (query: string) => {
    router.push('/search?q=' + query);
  };

  return (
    <div className='flex h-full w-full flex-grow items-stretch justify-around gap-4'>
      <div className='flex flex-col items-center justify-center gap-4'>
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
