'use client';

import { useState } from 'react';

import { createContext, Dispatch, SetStateAction } from 'react';

type MenuState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuState>({
  isOpen: false,
  setIsOpen: () => {},
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
