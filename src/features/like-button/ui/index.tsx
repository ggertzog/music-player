import React, { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import heart from '@/shared/assets/icons/heart.svg';
import heartActive from '@/shared/assets/icons/heart_active.svg';

const cn = classNames.bind(styles);

interface LikeButtonParams {
    onClick: () => void;
}

export const LikeButton: React.FC<LikeButtonParams> = ({onClick}) => {

    const[isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(prev => !prev);
        onClick()
    }

    return (
        <button className={cn('button',  {button_type_active : isLiked} )} onClick={toggleLike}>
            <img className={styles.heart} src={isLiked ? heartActive : heart} alt='heart' />
        </button>
    )
}