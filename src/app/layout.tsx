// app/layout.tsx
import localFont from 'next/font/local';

const malven = localFont({
  src: [
    {
      path: '/fonts/MalvenRegular-51MRB.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={malven.className}>
      <body>{children}</body>
    </html>
  );
}
