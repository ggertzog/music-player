import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import NavLink from '@/shared/ui/nav-link';
import NavData from '@/widgets/navigation/model/nav-data';
import { ListRenderer } from '@/features/list-renderer/ui';

export const BurgerMenu = () => {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('hamburger-menu')}>
            <input id={cx('menu__toggle')} className={cx('menu__toggle')} type="checkbox" />
            <label className={cx('menu__btn')} htmlFor={cx('menu__toggle')}>
                <span></span>
            </label>
            <ul className={cx('menu__box')}>
                <ListRenderer 
                    data={NavData}
                    rendererItem={(item) => (
                        <NavLink key={item.id} link={item.link} theme={item.theme} text={item.text} />
                    )}
                    className={styles.list}
                />
            </ul>
        </div>
    );
};
