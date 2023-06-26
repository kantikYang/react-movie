'use client';

import { useGetMoviesQuery } from '@/redux/movieApi';
import { FilmCard } from '../FilmCard/FilmCard';
import { Filter } from '../Filter/Filter';
import style from './MainSection.module.css';
import { mapGenre } from '@/utils/genreMap';

export default function MainSection() {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  // console.log(data);

  const genreFilt = Array.from(
    new Set(data.map((item) => mapGenre[item.genre]))
  );

  return (
    <div className={style.main}>
      <Filter items={genreFilt} />
      <div className={style.listFilm}>
        {Boolean(data) &&
          data.map((item) => {
            return (
              <FilmCard
                key={item.id}
                id={item.id}
                href={`/film/${item.id}`}
                title={item.title}
                genre={item.genre}
                posterUrl={item.posterUrl}
              />
            );
          })}
      </div>
    </div>
  );
}
