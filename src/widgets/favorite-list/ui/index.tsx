import React from 'react';
import styles from './styles.module.scss';
import favorite from '@/shared/assets/icons/favorite-icon.svg';

export const FavoriteList = () => {
    return (
        <div className={styles['favorite-list']}>
            <div className={styles.disc}>
                <img className={styles.icon} src={favorite} alt='' />
                <h2 className={styles.title}>Favorite Songs</h2>
            </div>
            <div className={styles.container}></div>
        </div>
    )
}