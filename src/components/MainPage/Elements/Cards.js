import React from 'react';
import '../Styles/Cards.css';
import ikea from '../../../images/img-9.jpg';
import colab from '../../../images/img-2.jpg';
import sister from '../../../images/img-3.jpg';
import rules from '../../../images/img-4.jpg';
import trends from '../../../images/img-8.jpg'
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div id='news' className='cards'>
      <h1>Новости из МИРА коллабораций!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ikea}
              text='IKEA создала новые предметы интерьера в коллаборации с современными художниками'
              label='Вдохновение'
              href='https://adindex.ru/news/adyummy/2021/03/17/292040.phtml'
            />
            <CardItem
              src={colab}
              text='Коллаборации - новый тренд: как удовлетворить клиентов и увеличить трафик'
              label='Бизнес'
              href='https://pro.rbc.ru/demo/5d7123979a7947144f459107'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={sister}
              text='Две сестры из Ростова выпускают коллекции одежды с «Союзмультфильмом» и Тимати'
              label='Вдохновение'
              href='https://www.forbes.ru/karera-i-svoy-biznes/384611-kak-dve-sestry-pridumali-odezhdu-za-kotoruyu-ne-stydno-i-teper'
            />
            <CardItem
              src={rules}
              text='Топ-5 правил эффективной коллаборации брендов'
              label='Бизнес'
              href='https://supa.ru/blog/posts/top-5-pravil-effiektivnoi-kollaboratsii-briendov'
            />
            <CardItem
              src={trends}
              text='Тренды продаж в 2021 году'
              label='Бизнес'
              href='https://planfact.io/blog/posts/trendy-prodazh-v-2021-godu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
