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
                    <NavLink link='' theme='profile' text='Profile' />
                    <NavLink link='/' theme='dash' text='Dashboard' />
                    <NavLink link='' theme='favorite' text='Favorite' />
                    <NavLink link='/chat' theme='chat' text='Chat' />
                    <NavLink link='' theme='friends' text='Friends' />
                </div>
            </nav>
        </div>
    )
}