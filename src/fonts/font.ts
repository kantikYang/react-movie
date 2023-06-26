import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const SFProText = localFont({
  src: '../../public/fonts/SFProText-Regular.ttf',
});
