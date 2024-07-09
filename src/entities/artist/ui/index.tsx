import React, { FC } from 'react';
import styles from './styles.module.scss';
import dots from '@/shared/assets/icons/menu-dots.svg'

interface ArtistParams {
    avatar: string;
    name: string;
    album: number;
}

export const Artist: FC<ArtistParams> = ({avatar, name, album}) => {
    return (
        <div className={styles.artist}>
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} alt='Аватар' />
                <div className={styles.box}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.album}>{album} play album</p>
                </div>
            </div>
            <button className={styles.button}>
                <img className={styles.image} src={dots} alt="Меню" />
            </button>
        </div>
    )
}