import React, { FC } from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";
import active from '@/shared/assets/icons/active.svg';
import play from '@/shared/assets/icons/play-song.svg';
import pause from '@/shared/assets/icons/pause-song.svg';

interface ISong {
    id: number;
    duration: number;
    image: string;
    artist: string;
    song: string;
    number: number;
    isPlaying: boolean;
    onClick?: () => void;
}

export const Song: FC<ISong> = ({ duration, image, artist, song, number, isPlaying, onClick}) => {

    const cx = classNames.bind(styles);

    return (
        <div className={styles.song} onClick={onClick}>
            <div className={styles['song-box']}>
                <span className={cx('number', {'number_type_active' : isPlaying})}>{`0${number}`}</span>
                <img className={cx('artist', {'artist_type_active' : isPlaying})} src={image} alt="Artist" />
                <p className={cx('description', {'description_type_active' : isPlaying})}>{`${artist} - ${song}`}</p>
            </div>
            <span className={cx('duration', {'duration_type_active' : isPlaying})}>{duration}</span>
            {isPlaying && <img className={styles.icon} src={active} alt="active" />}
            <button className={styles.button} >
                <img className={styles.image} src={isPlaying ? pause : play} alt='play' />
            </button>
        </div>
    )
}