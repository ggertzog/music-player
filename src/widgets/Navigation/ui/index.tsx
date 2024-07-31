import React from 'react';
import styles from './styles.module.scss';
import logo from '@/shared/assets/icons/logo.svg';
import { LinksList } from './links-list';
import NavData from '../model/nav-data';

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <img className={styles.logo} src={logo} alt='логотип' />
            <nav className={styles.container}>
                <div className={styles['border-gradient']}>
                    <p className={styles.title}>Menu</p>
                </div>
                <LinksList data={NavData} />
            </nav>
        </div>
    )
}