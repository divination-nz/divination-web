import { type FC } from 'react';
import { Icon } from '@iconify/react';

interface FooterProps {
  showCopyleftIcon?: boolean;
}

export const Footer: FC<FooterProps> = ({ showCopyleftIcon = true }) => (
  <footer className='flex flex-row flex-wrap items-center justify-between p-2 gap-1 w-full text-sm sm:text-[1rem]'>
    <a
      className='flex items-center gap-2 hover:underline hover:underline-offset-4'
      href='https://github.com/card-spy/divination-web'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon icon='mdi:github' width='24' height='24' />
      View Github Repo
    </a>
    Copyleft {showCopyleftIcon && '🄯'} Matthew Eden {new Date().getFullYear()}
  </footer>
);
