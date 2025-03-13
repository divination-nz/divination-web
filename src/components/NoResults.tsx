export const NoResults = () => (
  <div className='flex h-full w-full flex-col items-center justify-center gap-2 p-4'>
    <p className='font-[family-name:var(--font-beleren)] text-[10rem] font-bold leading-[0.75] text-maroon sm:leading-[1]'>
      ?
    </p>
    <p className='text-xl font-bold sm:text-2xl'>
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
    <p className='text-lg italic sm:text-xl'>
      “The key to unlocking this puzzle is within you.” —Doriel, mentor of
      Mistral Isle
    </p>
  </div>
);
