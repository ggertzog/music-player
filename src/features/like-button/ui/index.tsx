import React, { useState } from 'react';
import styles from './styles.module.scss';
import { HeartIcon } from '@/shared/assets/icons/heart';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const LikeButton = () => {

    const[isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(prev => !prev);
    }

    return (
        <button className={cn('button',  {button_type_active : isLiked} )} onClick={toggleLike}>
            <HeartIcon className={styles.image} />
        </button>
    )
}