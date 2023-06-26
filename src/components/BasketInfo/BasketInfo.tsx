'use client';
import { useSelector } from 'react-redux';
import { FilmCard } from '../FilmCard/FilmCard';
import style from './BasketInfo.module.css';
import {
  // selectCartArray,
  selectTotalProductCount,
  selectTotalProductInfo,
} from '@/redux/feature/selector';

const AllTickets = () => {
  return (
    <div className={style.allTickets}>
      <div>Итого билетов</div>
      <div>7</div>
    </div>
  );
};

export const BasketInfo = () => {
  // const amount = useSelector((state) => selectCartArray(state));

  const count = useSelector((state) => selectTotalProductCount(state));
  const products = Object.entries(
    useSelector((state) => selectTotalProductInfo(state))
  );
  // console.log(products);
  return (
    <div className={style.basketInfo}>
      <div className={style.basketList}>
        {Boolean(products) &&
          products.map((item: any) => {
            return (
              <FilmCard
                key={item[0]}
                id={item[0]}
                href={`/film/${item[0]}`}
                title={item[1].title}
                genre={item[1].genre}
                posterUrl={item[1].posterUrl}
                isBasket={true}
              />
            );
          })}
      </div>
      <div className={style.allTickets}>
        <div>Итого билетов</div>
        <div>{count}</div>
      </div>
      {/* <AllTickets /> */}
    </div>
  );
};
