import React from 'react';
import styles from './styles.module.scss';
import bell from '@/shared/assets/icons/bell.svg';

export const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.container}>
                <img className={styles.avatar} src='https://autopeople.ru/article/wp-content/uploads/2020/12/ilon-mask-scaled.jpg' alt='Илон' />
                <div className={styles.description}>
                    <h2 className={styles.name}>Илон</h2>
                    <p className={styles.about}>Премиум блог</p>
                </div>
            </div>
            <button className={styles.button}>
                <img className={styles.image} src={bell} alt='Колокольчик' />
            </button>
        </div>
    )
}