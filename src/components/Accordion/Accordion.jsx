'use client';
import React, { useCallback, useContext, useState } from 'react';
import style from './Accordion.module.css';

const MenuContext = React.createContext(false);

const aboutBiletpoisk =
  'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.';

const textCork =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis dui at mauris maximus, sed ultrices augue tempus. Aliquam hendrerit velit at lorem elementum, mattis convallis nisl maximus. Cras facilisis mauris tortor, et vestibulum libero euismod ac. Etiam gravida magna eget nunc pulvinar laoreet. Vestibulum mauris urna, tincidunt vel scelerisque quis, gravida eget nisl. Etiam lacinia urna ut diam accumsan lobortis. Etiam bibendum ac turpis quis hendrerit.';

const MenuAccordion = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState();

  const switchGroup = useCallback((title) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      <div className={style.menuAccordion}>{children}</div>
    </MenuContext.Provider>
  );
};

MenuAccordion.Group = function MenuGroup({ children, title }) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <div className={style.itemAccordion}>
      <div onClick={() => switchGroup(title)} className={style.titleAccordion}>
        <div>{title}</div>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={activeGroup === title ? 'rotate(180)' : 'rotate(0)'}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0001 30.3334H20.0001C27.2401 30.3334 30.3334 27.2401 30.3334 20.0001V12.0001C30.3334 4.76008 27.2401 1.66675 20.0001 1.66675H12.0001C4.76008 1.66675 1.66675 4.76008 1.66675 12.0001V20.0001C1.66675 27.2401 4.76008 30.3334 12.0001 30.3334ZM3.66675 12.0001C3.66675 5.85341 5.85341 3.66675 12.0001 3.66675H20.0001C26.1467 3.66675 28.3334 5.85341 28.3334 12.0001V20.0001C28.3334 26.1467 26.1467 28.3334 20.0001 28.3334H12.0001C5.85341 28.3334 3.66675 26.1467 3.66675 20.0001V12.0001ZM15.2934 19.5868C15.4934 19.7868 15.7467 19.8801 16.0001 19.8801C16.2534 19.8801 16.5067 19.7868 16.7067 19.5868L21.4134 14.8801C21.8001 14.4934 21.8001 13.8534 21.4134 13.4668C21.0267 13.0801 20.3867 13.0801 20.0001 13.4668L16.0001 17.4668L12.0001 13.4668C11.6134 13.0801 10.9734 13.0801 10.5867 13.4668C10.2001 13.8534 10.2001 14.4934 10.5867 14.8801L15.2934 19.5868Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
      {activeGroup === title && (
        <div className={style.textAccordion}>{children}</div>
      )}
    </div>
  );
};

MenuAccordion.Item = function MenuItem({ text }) {
  return <div>{text}</div>;
};

export default function Accordion() {
  return (
    <div>
      <p className={style.nameAccordion}>Вопросы-ответы</p>
      <MenuAccordion>
        <MenuAccordion.Group title="Что такое Билетпоиск?">
          <MenuAccordion.Item text={aboutBiletpoisk} />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Какой компании принадлежит Билетпоиск?">
          <MenuAccordion.Item text="Информация под NDA" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Как купить билет на Билетпоиск?">
          <MenuAccordion.Item text={textCork} />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Как оставить отзыв на Билетпоиск?">
          <MenuAccordion.Item text={textCork} />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  );
}
