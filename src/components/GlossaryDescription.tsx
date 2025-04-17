import { createGlossaryFilterRegExp } from '@/utility/glossaryFilterRegExp';
import { type FC } from 'react';

interface GlossaryDescriptionProps {
  description: string;
  markedText?: string;
}

export const GlossaryDescription: FC<GlossaryDescriptionProps> = ({
  description,
  markedText,
}: {
  description: string;
  markedText?: string;
}) => {
  const markedDescription = !!markedText
    ? description.replace(
        createGlossaryFilterRegExp(markedText),
        '<mark>$1</mark>'
      )
    : description;
  const splitDescription = markedDescription.split('\n');

  return (
    <div className='text-sm sm:text-[1rem] sm:leading-6'>
      {splitDescription.map((line, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
    </div>
  );
};
