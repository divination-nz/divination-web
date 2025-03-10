export const NoResults = () => (
  <div className='flex flex-col items-center justify-center h-full w-full gap-2 p-4'>
    <p className='text-[10rem] leading-[0.75] sm:leading-[1] font-[family-name:var(--font-beleren)] font-bold text-maroon'>
      ?
    </p>
    <p className='text-xl sm:text-2xl font-bold'>
      No rules found. Try a different query, or{' '}
      <a
        href='https://rules.cardspy.nz'
        target='_blank'
        rel='noopener norefferer'
        className='text-blue underline sm:no-underline sm:hover:underline'
      >
        check the rulebook.
      </a>
    </p>
    <p className='text-lg sm:text-xl italic'>
      “The key to unlocking this puzzle is within you.” —Doriel, mentor of
      Mistral Isle
    </p>
  </div>
);
