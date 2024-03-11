import React, { useContext } from 'react';
// import space from '../../images/space.jpg';
import '../../blocks/Song.css';
import { CurrentContext } from '../../contexts/CurrentContext';

export default function Song({isPlay}) {

  const {songTitle: title, cover: image, artist} = useContext(CurrentContext);

  return (
    <div className='song'>
        <img className={`song__image ${isPlay ? 'song__image_type_play' : ''}`} src={image} alt='Альбом' />
        <h2 className='song__title'>{artist}</h2>
        <p className='song__subtitle'>{title}</p>
    </div>
  )
}
