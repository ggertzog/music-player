import React, { FC } from 'react';
import styles from './styles.module.scss';
import play from '@/shared/assets/icons/play-song.svg';

interface SongParams {
    image: string;
    title: string;
    counter: string;
}

export const RecentlySong: FC<SongParams> = ({image, title, counter}) => {
    return (
        <div className={styles['recently-song']}>
            <div className={styles.container}>
                <img 
                    className={styles.preview} 
                    src={image} 
                    alt="Превью" 
                />
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.container}>
                <p className={styles.counter}>{counter}</p>
                <button className={styles.button}>
                    <img className={styles.image} src={play} alt="Играть" />
                </button>
            </div>
        </div>
    )
}
