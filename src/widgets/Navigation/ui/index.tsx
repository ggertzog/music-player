import React from 'react';
import styles from './styles.module.scss';
import logo from '@/shared/assets/icons/logo.svg';
import NavData from '../model/nav-data';
import { User } from '@/entities/user';
import useResize from '@/features/resize';
import { ListRenderer } from '@/features/list-renderer/ui';
import NavLink from '@/shared/ui/nav-link';

export const Navigation = () => {

    const width = useResize();

    return (
        <div className={styles.navigation}>
            <img className={styles.logo} src={logo} alt='логотип' />
            {width < 1440 ? <User /> : null}
            <nav className={styles.container}>
                <div className={styles['border-gradient']}>
                    <p className={styles.title}>Menu</p>
                </div>
                <ListRenderer 
                    data={NavData}
                    rendererItem={(item) => (
                        <NavLink key={item.id} link={item.link} theme={item.theme} text={item.text} />
                    )}
                    className={styles.menu}
                />
            </nav>
        </div>
    )
}