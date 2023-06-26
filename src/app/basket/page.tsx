import { About } from '@/components/About/About';
import { FilmCard } from '@/components/FilmCard/FilmCard';
import { Filter } from '@/components/Filter/Filter';
import { Footer } from '@/components/Footer/Footer';
import MainSection from '@/components/MainSection/MainSection';
import Accordion from '@/components/Accordion/Accordion';
import { FilmInfo } from '@/components/FilmInfo/FilmInfo';
import { Review } from '@/components/Reviews/Review';
import { Reviews } from '@/components/Reviews/Reviews';
import { DeleteTicket } from '@/components/DeleteTicket/DeleteTicket';
import { BasketInfo } from '@/components/BasketInfo/BasketInfo';

const revews = [
  {
    id: '6iaV-jUSjfl-gGk8EOdQ1',
    name: 'Андрей',
    text: 'Фильм хороший, но сюжет немного затянут',
    rating: 7,
  },
  {
    id: '-b9ezNy3oSoMpldgUl_IC',
    name: 'Екатерина',
    text: 'В целом, фильм понравился, но некоторые моменты были не очень понятны',
    rating: 6,
  },
  {
    id: 'joAPS_G2-BgIIYQNmkWHh',
    name: 'Сергей',
    text: 'Мне не очень понравился фильм, но в нем есть несколько интересных моментов',
    rating: 5,
  },
  {
    id: 'un6oKnwU6pSZaxFfWQdUS',
    name: 'Ольга',
    text: 'Это был интересный опыт, но я ожидала большего',
    rating: 4,
  },
  {
    id: 'F_sUc0y7PUNvm0_FVgK-l',
    name: 'Анна',
    text: 'Очень хороший фильм, рекомендую всем посмотреть',
    rating: 9,
  },
  {
    id: 't8QHNLoec1QF1XFyObGk7',
    name: 'Александр',
    text: 'Этот фильм стоит посмотреть хотя бы ради актерского состава',
    rating: 8,
  },
];

export default function Basket() {
  return <BasketInfo />;
}
{
  /* <Reviews/>
<REcomendation /> */
}
