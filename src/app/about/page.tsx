export default async function About() {
  return (
    <main className='flex w-full flex-col items-start justify-start gap-2 overflow-y-scroll lg:px-48'>
      <h1 className='font-[family-name:var(--font-beleren)] text-4xl text-sky'>
        {'About'}
      </h1>
      <p className='text-left text-text'>
        <b>{'Divination'}</b>{' '}
        {
          "is a web app for searching Magic: the Gathering's Comprehensive Rules."
        }{' '}
        <br />
        <br />
        Created to help you and your friends find the rules you need before the
        next untap step. Created to help judges make the calls they need
        quicker. Created to make the rules more accessible for everyone.
        <br />
        <br />
        Whenever you need a ruling, think <b>Divination</b>.
      </p>
      <h2 className='font-[family-name:var(--font-beleren)] text-2xl text-teal'>
        Features
      </h2>
      <ul className='w-full list-disc px-4'>
        <li>Search for rules by keyword</li>
        <li>Jump to the rulebook from any rule</li>
        <li>With OpenSearch integration, use it as a rules search engine</li>
      </ul>
      <h2 className='font-[family-name:var(--font-beleren)] text-2xl text-teal'>
        Legal Notice
      </h2>
      <p>
        Portions of Divination are unofficial Fan Content permitted under the
        Wizards of the Coast Fan Content Policy. The literal and graphical
        information presented on this site about Magic: The Gathering, including
        card images and mana symbols, is copyright Wizards of the Coast, LLC.
        The Comprehensive Rules presented in whole or part on this site are the
        sole property of Wizards of the Coast, LLC, and are not produced or
        modified by Divination. Divination is not produced by or endorsed by
        Wizards of the Coast.
      </p>
      <blockquote className='mt-2 italic text-lavender'>
        “Half of your studies will be learning the laws of magic. The other half
        will be bending them.” —Naru Meha, master wizard
      </blockquote>
    </main>
  );
}
