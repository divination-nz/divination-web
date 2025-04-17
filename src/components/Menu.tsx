'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { type FC, useContext } from 'react';
import { MenuContext } from './MenuProvider';

interface MenuItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  linkProps?: Omit<React.ComponentProps<typeof Link>, 'href'>;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({
  href,
  icon,
  label,
  linkProps,
  onClick,
}) => (
  <Link
    className='flex items-center justify-start gap-2 p-1 hover:bg-surface2'
    href={href}
    onClick={onClick}
    {...linkProps}
  >
    {icon}
    {label}
  </Link>
);

export const Menu: FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div
        className='absolute right-4 top-4 cursor-pointer sm:hidden'
        onClick={toggleMenu}
      >
        <Icon icon='solar:hamburger-menu-outline' width='48' height='48' />
      </div>

      <div
        className={`absolute right-0 top-0 z-10 flex h-[17rem] w-full flex-col gap-2 border-b-2 border-solid border-text bg-base duration-150 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div
          className='ml-4 mr-4 mt-4 flex items-center justify-between'
          onClick={toggleMenu}
        >
          <h2 className='text-3xl text-maroon'>Menu</h2>
          <Icon
            className='cursor-pointer'
            icon='ic:round-close'
            width='48'
            height='48'
          />
        </div>
        <div className='ml-2 flex flex-col gap-2 text-2xl'>
          <MenuItem
            onClick={() => setIsOpen(false)}
            href='/'
            label='Home'
            icon={<Icon icon='ic:baseline-home' width='32' height='32' />}
          />
          <MenuItem
            onClick={() => setIsOpen(false)}
            href='/about'
            label='About'
            icon={<Icon icon='ic:round-info' width='32' height='32' />}
          />
          <MenuItem
            onClick={() => setIsOpen(false)}
            href='/glossary'
            label='Glossary'
            icon={<Icon icon='raphael:book' width='32' height='32' />}
          />
          <MenuItem
            onClick={() => setIsOpen(false)}
            href='https://rules.divination.nz'
            label='Rules'
            icon={<Icon icon='tabler:book-filled' width='32' height='32' />}
            linkProps={{ target: '_blank', rel: 'noopener noreferrer' }}
          />
        </div>
      </div>
    </>
  );
};
