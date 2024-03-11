import React from 'react';
import '../../blocks/Slider.css';

export default function Slider() {
  return (
    <div className='slider'>
        <input className='slider__input' type='range'/>
        <div className='slider__container'>
            <p className='slider__time'>0.00</p>
            <p className='slider__time'>3.20</p>
        </div>
    </div>
  )
}
