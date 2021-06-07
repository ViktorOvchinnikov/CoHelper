import React from 'react';
import '../../../App.css';
import { Button } from '../../Button.js';
import '../Styles/HelloSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>НАЙДИ ПАРТНЕРА СЕГОДНЯ</h1>
      <p>Чего же вы ждете?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ПРИСОЕДИНИТЬСЯ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          УЗНАТЬ ПОДРОБНЕЕ <i class="far fa-question-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
