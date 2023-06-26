import { useGetReviewsQuery } from '@/redux/movieApi';
import { Review } from './Review';
import style from './Reviews.module.css';

export const Reviews = ({ id }) => {
  const { data, isLoading, error } = useGetReviewsQuery(id);

  if (isLoading) {
    return <span>Получение комментариев...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }
  return (
    <div className={style.reviews}>
      {Boolean(data.length) &&
        data.map((item) => {
          return (
            <Review
              key={item.id}
              rating={item.rating}
              author={item.name}
              text={item.text}
            />
          );
        })}
    </div>
  );
};
