import { useCount } from '@/hooks/useCount';
import style from './TicketCount.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '@/redux/feature/selector';
import { cartActions } from '@/redux/feature';
import { DeleteTicket } from '../DeleteTicket/DeleteTicket';
import { createPortal } from 'react-dom';

const plusBtn = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H6.375V10.125C6.375 10.2245 6.33549 10.3198 6.26517 10.3902C6.19484 10.4605 6.09946 10.5 6 10.5C5.90054 10.5 5.80516 10.4605 5.73484 10.3902C5.66451 10.3198 5.625 10.2245 5.625 10.125V6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H5.625V1.875C5.625 1.77554 5.66451 1.68016 5.73484 1.60984C5.80516 1.53951 5.90054 1.5 6 1.5C6.09946 1.5 6.19484 1.53951 6.26517 1.60984C6.33549 1.68016 6.375 1.77554 6.375 1.875V5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z"
      fill="white"
    />
  </svg>
);

const minusBtn = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z"
      fill="white"
    />
  </svg>
);

const closeBtn = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0673 15.1828C16.1254 15.2409 16.1714 15.3098 16.2028 15.3857C16.2343 15.4615 16.2505 15.5429 16.2505 15.625C16.2505 15.7071 16.2343 15.7884 16.2028 15.8643C16.1714 15.9402 16.1254 16.0091 16.0673 16.0672C16.0092 16.1252 15.9403 16.1713 15.8644 16.2027C15.7885 16.2342 15.7072 16.2503 15.6251 16.2503C15.543 16.2503 15.4617 16.2342 15.3858 16.2027C15.3099 16.1713 15.241 16.1252 15.1829 16.0672L10.0001 10.8836L4.81729 16.0672C4.70002 16.1844 4.54096 16.2503 4.3751 16.2503C4.20925 16.2503 4.05019 16.1844 3.93292 16.0672C3.81564 15.9499 3.74976 15.7908 3.74976 15.625C3.74976 15.4591 3.81564 15.3001 3.93292 15.1828L9.11651 9.99998L3.93292 4.81717C3.81564 4.69989 3.74976 4.54083 3.74976 4.37498C3.74976 4.20913 3.81564 4.05007 3.93292 3.93279C4.05019 3.81552 4.20925 3.74963 4.3751 3.74963C4.54096 3.74963 4.70002 3.81552 4.81729 3.93279L10.0001 9.11639L15.1829 3.93279C15.3002 3.81552 15.4593 3.74963 15.6251 3.74963C15.791 3.74963 15.95 3.81552 16.0673 3.93279C16.1846 4.05007 16.2505 4.20913 16.2505 4.37498C16.2505 4.54083 16.1846 4.69989 16.0673 4.81717L10.8837 9.99998L16.0673 15.1828Z"
      fill="#333333"
    />
  </svg>
);

// export const TicketCount = ({ id, isBasket = false }) => {
//   const count = useSelector((state) => selectProductAmount(state, id));
//   const dispatch = useDispatch();

//   return (
//     <div className={style.cardEdit}>
//       <div className={style.ticketCount}>
//         <button
//           onClick={() => dispatch(cartActions.decrement(id))}
//           className={style.countBtn}
//           disabled={count <= 0}
//         >
//           {minusBtn}
//         </button>
//         <p>{count}</p>
//         <button
//           onClick={() => dispatch(cartActions.increment(id))}
//           className={style.countBtn}
//           disabled={count >= 30}
//         >
//           {' '}
//           {plusBtn}
//         </button>
//       </div>
//       {isBasket && <div className={style.closeBtn}> {closeBtn}</div>}
//     </div>
//   );
// };

export const TicketCount = ({
  id,
  title,
  posterUrl,
  genre,
  isBasket = false,
}) => {
  const product = useSelector((state) => selectProduct(state, id));
  const count = product ? product.count : 0;
  const dispatch = useDispatch();
  const container = document.body.querySelector('#modal-root');
  console.log(container);
  return (
    <div className={style.cardEdit}>
      <div className={style.ticketCount}>
        <button
          onClick={() => dispatch(cartActions.removeProduct(id))}
          className={style.countBtn}
          disabled={count <= 0}
        >
          {minusBtn}
        </button>
        <p>{count}</p>
        <button
          onClick={() =>
            dispatch(cartActions.addProduct({ id, title, posterUrl, genre }))
          }
          className={style.countBtn}
          disabled={count >= 30}
        >
          {' '}
          {plusBtn}
        </button>
      </div>
      {isBasket && (
        <button
          className={style.closeBtn}
          onClick={() => createPortal(<DeleteTicket id={id} />, container)}
        >
          {' '}
          {closeBtn}
        </button>
      )}
    </div>
  );
};
