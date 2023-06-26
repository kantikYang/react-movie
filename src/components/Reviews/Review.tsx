import Image from 'next/image';
import style from './Review.module.css';
import imgDefault from '../../../public/images/reviewAvatarDefault.jpg';

export interface ReviewProps {
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  text: string;
  author: string;
  id: string;
}

export const Review = (review: ReviewProps) => {
  return (
    <div key={review.id} className={style.reviewCard}>
      <Image
        src={imgDefault}
        className={style.avatar}
        alt="Reviewer avatar"
        width={100}
        height={100}
      />
      <div className={style.reviewInfo}>
        <div className={style.reviewTitle}>
          <p className={style.titleWeigth}>{review.author}</p>
          <p>
            Оценка: <span className={style.titleWeigth}>{review.rating}</span>
          </p>
        </div>
        <p className={style.reviewText}>{review.text}</p>
      </div>
    </div>
  );
};
