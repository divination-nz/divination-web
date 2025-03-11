'use client';

import { FC } from 'react';

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
      className={`flex flex-col ${centreContents && 'items-center justify-center'} overflow-y-scroll overflow-x-hidden h-full w-full gap-2 p-2 border-solid border-2 border-text`}
    >
      {children}
    </div>
  );
};
