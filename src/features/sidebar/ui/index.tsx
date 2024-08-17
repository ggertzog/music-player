import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import NavLink from '@/shared/ui/nav-link';
import NavData from '@/widgets/navigation/model/nav-data';
import { ListRenderer } from '@/features/list-renderer/ui';

export const SideBar = () => {
    const cx = classNames.bind(styles);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let startX = 0;
        let endX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            endX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            if (startX < 50 && endX > startX + 50) {
                setIsOpen(true);
            } else if (startX > 200 && startX > endX + 50) {
                setIsOpen(false);
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cx('hamburger-menu', { open: isOpen })}>
            {/* <input
                id={cx('menu__toggle')}
                className={cx('menu__toggle')}
                type="checkbox"
                checked={isOpen}
                onChange={toggleMenu}
            /> */}
            {/* <label className={cx('menu__btn')} htmlFor={cx('menu__toggle')}>
                <span></span>
            </label> */}
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
