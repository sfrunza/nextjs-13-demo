import '@/styles/tailwind.css';
// import localFont from '@next/font/local';
import GlobalNav from './GlobalNav';
import Footer from './Footer';
import { Inter } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: '--font-inter',
});

// const myFont = localFont({ src: '../styles/fonts/Inter-roman.var.woff2' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalNav />
        <main className="mt-[-66px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
