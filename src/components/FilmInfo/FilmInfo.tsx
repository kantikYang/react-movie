'use client';

import { TicketCount } from '../TicketCount/TicketCount';
import style from './FilmInfo.module.css';

import Image from 'next/image';
import ImageSrc from '../../../public/images/rectangle-55.png';
import { mapGenre } from '@/utils/genreMap';

const noName = 'Не указано';

export interface PropsFimlmPage {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
}

const DescritionTitle = ({
  typeInfo,
  valueinfo,
}: {
  typeInfo: string;
  valueinfo: string | number;
}) => {
  return (
    <p className={style.descripTitle}>
      <span className={style.typeInfo}>{typeInfo}:</span>{' '}
      <span>{Boolean(valueinfo) ? valueinfo : noName}</span>
    </p>
  );
};

export const FilmInfo = ({
  title,
  posterUrl,
  releaseYear,
  description,
  genre,
  id,
  rating,
  director,
}: PropsFimlmPage) => {
  return (
    <div className={style.filmInfo}>
      <Image
        src={posterUrl}
        alt="Movie poster"
        className={style.imgFilm}
        role="presentation"
        width={400}
        height={500}
        placeholder="blur"
        blurDataURL={posterUrl}
      />
      <div className={style.filmPreview}>
        <div className={style.filmTitle}>
          <p className={style.filmName}>{title || 'NoName'}</p>
          <TicketCount
            id={id}
            title={title}
            posterUrl={posterUrl}
            genre={mapGenre[genre]}
          />
        </div>
        <div className={style.baseInfo}>
          <DescritionTitle typeInfo="Жанр" valueinfo={mapGenre[genre]} />
          <DescritionTitle typeInfo="Год выпуска" valueinfo={releaseYear} />
          <DescritionTitle typeInfo="Рейтинг" valueinfo={rating} />
          <DescritionTitle typeInfo="Режиссер" valueinfo={director} />
        </div>
        <div className={style.descripPlace}>
          <p className={style.descripTitle}>Описание</p>
          <p className={style.descripText}>
            {Boolean(description) ? description : noName}
          </p>
        </div>
      </div>
    </div>
  );
};

{
  /* <p>{seasonCount > 0 ? `Количество ${seasonCount}`: "не имеет"}</p> */
}
