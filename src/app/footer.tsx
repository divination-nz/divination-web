import { type FC } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface FooterProps {
  showCopyleftIcon?: boolean;
}

export const Footer: FC<FooterProps> = ({ showCopyleftIcon = true }) => (
  <footer className='flex w-full flex-row flex-wrap items-center justify-between p-2 text-sm sm:text-[1rem]'>
    <a
      className='flex items-center justify-start gap-2 hover:underline hover:underline-offset-4 sm:basis-1/4'
      href='https://github.com/card-spy/divination-web'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon icon='mdi:github' width='24' height='24' />
      View Github Repo
    </a>
    <div className='hidden h-full basis-1/2 items-center justify-center gap-2 sm:flex'>
      <Link className='hover:underline hover:underline-offset-4' href='/'>
        Home
      </Link>
      {' ∙ '}
      <Link className='hover:underline hover:underline-offset-4' href='/about'>
        About
      </Link>
      {' ∙ '}
      <Link
        className='hover:underline hover:underline-offset-4'
        href='/glossary'
      >
        Glossary
      </Link>
      {' ∙ '}
      <Link
        className='hover:underline hover:underline-offset-4'
        href='https://rules.cardspy.nz'
        target='_blank'
        rel='noopener noreferrer'
      >
        Rules
      </Link>
    </div>
    <div className='flex h-full items-center justify-end sm:basis-1/4'>
      Copyleft {showCopyleftIcon && '🄯'} Matthew Eden {new Date().getFullYear()}
    </div>
  </footer>
);
