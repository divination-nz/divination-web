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
        new RegExp(`\\b(${markedText})\\b`, 'gi'),
        '<mark>$1</mark>'
      )
    : description;
  const splitDescription = markedDescription.split('\n');

  return (
    <div>
      {splitDescription.map((line, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
    </div>
  );
};
