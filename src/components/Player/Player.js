import '../../blocks/Player.css';
import React from 'react';
import Song from '../Song/Song';
import Slider from '../Slider/Slider';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';

export default function Player({isPlay, togglePlay, nextSong}) {
  return (
    <div className='player'>
        <Header />
        <Song 
            isPlay={isPlay}
        />
        <Slider />
        <Dashboard
          isPlay={isPlay}  
          togglePlay={togglePlay}
          nextSong={nextSong}
        />
    </div>
  )
}
