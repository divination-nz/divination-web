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
  const markedTitle = !!markedText
    ? title.replace(
        new RegExp(`\\b(${markedText})\\b`, 'gi'),
        '<mark>$1</mark>'
      )
    : title;

  return (
    <div className='w-full rounded-lg border-2 border-text p-2 text-text'>
      <h2
        className='font-[family-name:var(--font-beleren)] text-lg text-mauve sm:text-xl'
        dangerouslySetInnerHTML={{ __html: markedTitle }}
      />
      <GlossaryDescription description={description} markedText={markedText} />
    </div>
  );
};
