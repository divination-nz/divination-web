'use client';

import { type FC } from 'react';

interface RulesContainerProps {
  children: React.ReactNode;
  centreContents?: boolean;
}

export const RulesContainer: FC<RulesContainerProps> = ({
  children,
  centreContents,
}) => {
  return (
    <div
      className={`flex flex-col ${centreContents && 'items-center justify-center'} h-full w-full gap-2 overflow-x-hidden overflow-y-scroll border-2 border-solid border-text p-2`}
    >
      {children}
    </div>
  );
};
