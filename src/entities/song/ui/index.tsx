import React, { FC, useState } from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";
import active from '@/shared/assets/icons/active.svg';
import play from '@/shared/assets/icons/play-song.svg';
import pause from '@/shared/assets/icons/pause-song.svg';

interface ISong {
    duration: number,
    image: string,
    artist: string,
    song: string
}

export const Song: FC<ISong> = ({duration, image, artist, song}) => {

    const[isPlay, setIsPlay] = useState(false);

    const togglePlay = () => {
        setIsPlay(prev => !prev);        
    }

    const cx = classNames.bind(styles);

    return (
        <div className={styles.song}>
            <div className={styles['song-box']}>
                <span className={cx('number', {'number_type_active' : isPlay})}>01</span>
                <img className={cx('artist', {'artist_type_active' : isPlay})} src={image} alt="Artist" />
                <p className={cx('description', {'description_type_active' : isPlay})}>{`${artist} - ${song}`}</p>
            </div>
            <span className={cx('duration', {'duration_type_active' : isPlay})}>{duration}</span>
            {isPlay && <img className={styles.icon} src={active} alt="active" />}
            <button className={styles.button} onClick={togglePlay}>
                <img className={styles.image} src={isPlay ? pause : play} alt='play' />
            </button>
        </div>
    )
}