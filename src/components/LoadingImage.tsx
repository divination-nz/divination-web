import Image from 'next/image';

export const LoadingImage = () => (
  <Image
    aria-hidden
    className='animate-bounce'
    src='/planeswalker.svg'
    alt='Planeswalker Symbol'
    width={150}
    height={150}
  />
);
