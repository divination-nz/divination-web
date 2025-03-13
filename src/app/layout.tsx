import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </body>
    </html>
  );
}
