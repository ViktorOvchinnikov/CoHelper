import React from 'react';
import '../Styles/Cards.css';
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div id='news' className='cards'>
      <h1>Новости из МИРА коллабораций!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='IKEA создала новые предметы интерьера в коллаборации с современными художниками'
              label='Вдохновение'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Коллаборации - новый тренд: как удовлетворить клиентов и увеличить трафик'
              label='Бизнес'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Две сестры из Ростова выпускают коллекции одежды с «Союзмультфильмом» и Тимати'
              label='Вдохновение'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Топ-5 правил эффективной коллаборации брендов'
              label='Бизнес'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Тренды продаж в 2021 году'
              label='Бизнес'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
