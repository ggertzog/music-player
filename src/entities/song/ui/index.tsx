import React, { FC, useState } from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";
import active from '@/shared/assets/icons/active.svg';
import play from '@/shared/assets/icons/play-song.svg';
import pause from '@/shared/assets/icons/pause-song.svg';
// import { Track } from "@/features/audio-player/utils/audioContext";

interface ISong {
    id: number;
    duration: number;
    image: string;
    artist: string;
    song: string;
    number: number;
    isPlaying: boolean;
    // onPlay: (id: number, item: Track) => void;
    onClick?: () => void;
}

export const Song: FC<ISong> = ({ id, duration, image, artist, song, number, isPlaying, onClick}) => {

    // const[isPlay, setIsPlay] = useState(false);

    const togglePlay = () => {
        if(onClick) {
            onClick();
        }
        // setIsPlay(prev => !prev);        
    }

    const cx = classNames.bind(styles);

    return (
        <div className={styles.song}>
            <div className={styles['song-box']}>
                <span className={cx('number', {'number_type_active' : isPlaying})}>{`0${number}`}</span>
                <img className={cx('artist', {'artist_type_active' : isPlaying})} src={image} alt="Artist" />
                <p className={cx('description', {'description_type_active' : isPlaying})}>{`${artist} - ${song}`}</p>
            </div>
            <span className={cx('duration', {'duration_type_active' : isPlaying})}>{duration}</span>
            {isPlaying && <img className={styles.icon} src={active} alt="active" />}
            <button className={styles.button} onClick={togglePlay}>
                <img className={styles.image} src={isPlaying ? pause : play} alt='play' />
            </button>
        </div>
    )
}