import React from 'react';
import styles from './styles.module.scss';
import NavLink from '@/shared/ui/nav-link';
import logo from '@/shared/assets/icons/logo.svg';

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <img className={styles.logo} src={logo} alt='логотип' />
            <nav className={styles.container}>
                <div className={styles['border-gradient']}>
                    <p className={styles.title}>Menu</p>
                </div>
                <div className={styles.menu}>
                    <NavLink theme='profile' text='Profile' />
                    <NavLink theme='dash' text='Dashboard' />
                    <NavLink theme='favorite' text='Favorite' />
                    <NavLink theme='chat' text='Chat' />
                    <NavLink theme='friends' text='Friends' />
                </div>
            </nav>
        </div>
    )
}