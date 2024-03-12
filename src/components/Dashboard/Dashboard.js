import React from 'react';
import '../../blocks/Dashboard.css';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import backward from '../../images/backward.svg';
import forward from '../../images/forward.svg';
import arrowl from '../../images/arrowsl.svg';
import arrowr from '../../images/arrowsr.svg';

export default function Dashboard({isPlay, togglePlay, nextSong}) {

  // function nextSong () {
  //   changeMusic(+ 1);
  // }

  return (
    <div className='dashboard'>
        <button className='dashboard__button'><img className='dashboard__image dashboard__image-s' src={arrowl} alt='Перемешать' /></button>
        <button className='dashboard__button'><img className='dashboard__image' src={backward} alt='Предыдущая' /></button>
        <button className='dashboard__button' onClick={togglePlay}><img className='dashboard__image' src={isPlay ? pause : play} alt='Запуск' /></button>
        <button className='dashboard__button' onClick={nextSong}><img className='dashboard__image' src={forward} alt='Следующая' /></button>
        <button className='dashboard__button'><img className='dashboard__image dashboard__image-s' src={arrowr} alt='Зациклить' /></button>
    </div>
  )
}
