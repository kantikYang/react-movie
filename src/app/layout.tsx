import { Footer } from '@/components/Footer/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { StoreProvider } from '../redux/storeProvider';
import { roboto } from '../fonts/font';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={inter.className}>
        <StoreProvider>
          <div className="wrapper">
            <Header />
            <main>{children}</main>
            <div id="modal-root"></div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
