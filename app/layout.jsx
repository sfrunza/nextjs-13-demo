import '@/styles/tailwind.css';
import GlobalNav from './GlobalNav';
import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
