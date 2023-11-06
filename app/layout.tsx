import '@/app/global.css';

import { poppins } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    // By adding 'poppins' to the <body> element, the font will be applied throughout your application
    // Tailwind antialiased class which smooths out the font
    // Any UI you add to the root layout will be shared across all pages in your application
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
