'use client';
import { TicketCount } from '../TicketCount/TicketCount';
import style from './FilmCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { mapGenre } from '@/utils/genreMap';

interface Props {
  title: string;
  genre: string;
  id: string;
  href: string;
  posterUrl: string;
  isBasket?: boolean;
}

export const FilmCard = ({
  title,
  genre,
  id,
  href,
  posterUrl,
  isBasket = false,
}: Props) => {
  // console.log(id, 'ggg');
  return (
    <div className={style.cardFilm} key={id}>
      <Image
        src={posterUrl}
        alt="Movie poster"
        className={style.imgFilm}
        role="presentation"
        width={100}
        height={120}
        placeholder="blur"
        blurDataURL={posterUrl}
      />
      <div className={style.cardInfo}>
        <div>
          <Link href={href}>
            <p className={style.cardName}>{title || 'NoName'}</p>
          </Link>
          {Boolean(genre) && (
            <p className={style.cardGenre}>{mapGenre[genre]}</p>
          )}
        </div>
        <TicketCount
          isBasket={isBasket}
          id={id}
          title={title}
          posterUrl={posterUrl}
          genre={genre}
        />
      </div>
    </div>
  );
};

{
  /* <p>{seasonCount > 0 ? `Количество ${seasonCount}`: "не имеет"}</p> */
}
