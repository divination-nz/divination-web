import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
import { userAgent } from 'next/server';
import { headers } from 'next/headers';
import { Footer } from './footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const belerenBold = localFont({
  src: './Beleren2016-Bold.ttf',
  variable: '--font-beleren',
});

export const metadata: Metadata = {
  title: 'Divination',
  description:
    "Web app for searching Magic: the Gathering's Comprehensive Rules",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { os } = userAgent({ headers: await headers() });

  return (
    <html lang='en'>
      <link
        rel='search'
        type='application/opensearchdescription+xml'
        href='https://divination.cardspy.nz/opensearch.xml'
        title='Divination'
      />
      <body
        className={`${geistSans.variable} ${belerenBold.variable} antialiased`}
      >
        <div className='flex h-screen w-screen flex-col items-center justify-between gap-2 divide-y divide-solid divide-text overflow-hidden p-4 font-[family-name:var(--font-geist-sans)]'>
          {children}
          <Footer showCopyleftIcon={!os.name?.includes('Windows')} />
        </div>
      </body>
    </html>
  );
}
