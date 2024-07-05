import React, { FC } from "react";
import styles from './styles.module.scss';
import play from '@/shared/assets/icons/play-card.svg';

interface ICard {
    title: string,
    image: string,
    length: number,
}

export const Card: FC<ICard> = ({title, image, length}) => {
    return (
        <div className={styles.card}>
            <a className={styles.link} href="#">
                <img className={styles.image} src={image} />
            </a>
            <div className={styles.box}>
                <div className={styles['text-box']}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p className={styles.subtitle}>
                        {length} Tracks
                    </p>
                </div>
                <button className={styles.button}>
                    <img className={styles.icon} src={play} alt="Play" />
                </button>
            </div>
        </div>
    )
}