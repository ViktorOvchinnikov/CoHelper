import React from 'react';
import '../../../App.css';
import { Button } from '../../Button.js';
import { Link } from 'react-router-dom';
import '../Styles/HelloSection.css';
import video from '../../../videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>НАЙДИ ПАРТНЕРА СЕГОДНЯ</h1>
      <p>Чего же вы ждете?</p>
      <div className='hero-btns'>
        <Link to='/sign-up'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ПРИСОЕДИНИТЬСЯ
        </Button>
        </Link>
        <a href="#about">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        УЗНАТЬ ПОДРОБНЕЕ <i className="far fa-question-circle"/>
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
