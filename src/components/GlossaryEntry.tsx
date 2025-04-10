import { type FC } from 'react';
import { GlossaryDescription } from './GlossaryDescription';

interface GlossaryEntryProps {
  title: string;
  description: string;
  markedText?: string;
}

export const GlossaryEntry: FC<GlossaryEntryProps> = ({
  title,
  description,
  markedText,
}) => {
  return (
    <div className='w-full rounded-lg border-2 border-text p-2 text-text'>
      <h2 className='font-[family-name:var(--font-beleren)] text-2xl text-teal'>
        {title}
      </h2>
      <GlossaryDescription description={description} markedText={markedText} />
    </div>
  );
};
