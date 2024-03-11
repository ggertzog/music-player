import React, { useState } from 'react';
import '../../blocks/Header.css';
import songs from '../../utils/constants';
import plus from '../../images/plus.svg';
import ok from '../../images/ok.svg';

export default function Header() {

  const [isLiked, setIsLiked] = useState(false);

  const changeLike = () => {
    setIsLiked(prev => !prev);
  }

  return (
    <header className='header'>
      <div>
        <input className='header__burger-checkbox' id='burger-checkbox' type='checkbox' />
        <label htmlFor='burger-checkbox' className='header__burger-label'></label>
        <ul className='song-list'>
          {songs.map((song) => {
            return <li key={song.id}><p className='song-item'>{song.songTitle}</p></li>
          })}
        </ul>
      </div>
      <div>
        <button className='header__button-like' type='checkbox' onClick={changeLike}>
          <img className='header__button-image' src={isLiked ? ok : plus} alt='лайк' />
        </button>
      </div>
    </header>
  )
}
