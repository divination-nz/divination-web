import Image from 'next/image';

export const Loading = () => (
  <div className='flex flex-col items-center justify-center gap-2'>
    <Image
      aria-hidden
      className='animate-bounce'
      src='/planeswalker.svg'
      alt='Planeswalker Symbol'
      width={150}
      height={150}
    />
    <p className='text-xl sm:text-2xl font-bold italic'>Loading...</p>
  </div>
);
