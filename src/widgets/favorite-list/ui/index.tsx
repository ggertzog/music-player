import React from 'react';
import styles from './styles.module.scss';
import favorite from '@/shared/assets/icons/favorite-icon.svg';
import useAddToFavorite from '@/features/add-to-favorite';
import { Song } from '@/entities/song';

export const FavoriteList = () => {

    const { favoriteSongs } = useAddToFavorite();
    console.log(favoriteSongs);

    if (!Array.isArray(favoriteSongs)) {
        return <div className={styles['favorite-list']}>No favorite songs available.</div>;
    }

    return (
        <div className={styles['favorite-list']}>
            <div className={styles.disc}>
                <img className={styles.icon} src={favorite} alt='' />
                <h2 className={styles.title}>Favorite Songs</h2>
            </div>
            <div className={styles.container}>
                {favoriteSongs.map((item) => (
                    <Song 
                        key={item.id}
                        id={item.id}
                        duration={item.duration}
                        image={item.image}
                        artist={item.artist}
                        song={item.song}
                        isPlaying={false}                        
                    />
                ))}
            </div>
        </div>
    )
}