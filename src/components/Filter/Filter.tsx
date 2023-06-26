import { SFProText } from '@/fonts/font';
import { DropDown } from '../DropDown/DropDown';
import { Input } from '../Input/Input';
import style from './Filter.module.css';
import cssName from 'classnames';

const cinema = ['Синема сад', '4 с половиной звезды', 'Дружба'];

export const Filter = ({ items }: { items: string[] }) => {
  console.log(items);
  return (
    <div className={cssName(style.filter, SFProText.className)}>
      <p>Фильтр поиска</p>
      <Input title="Название" placeHolder="Введите название" isDrop={false} />
      <DropDown
        title="Жанр"
        placeHolder="Выберите жанр"
        isDrop={true}
        items={items}
      />
      <DropDown
        title="Кинотеатр"
        placeHolder="Выберите кинотеатр"
        isDrop={true}
        items={cinema}
      />
    </div>
  );
};
