import Link from 'next/link';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link href="./FAQ">Вопросы ответы</Link>
      <Link href="./about">О нас</Link>
    </footer>
  );
};
