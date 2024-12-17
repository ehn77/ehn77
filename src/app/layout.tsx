import localFont from 'next/font/local';

const malven = localFont({
  src: [
    {
      path: '/fonts/MalvenRegular-51MRB.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-malven',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${malven.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
