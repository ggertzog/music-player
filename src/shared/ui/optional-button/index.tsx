import React, { FC } from 'react';
import styles from './styles.module.scss';

import shuffle from '@/shared/assets/icons/shuffle.svg';
import replay from '@/shared/assets/icons/replay.svg';
import heart from '@/shared/assets/icons/heart.svg';
import share from '@/shared/assets/icons/share.svg';

const icons = {
    shuffle,
    replay,
    heart,
    share
}

interface IButton {
    readonly theme: keyof typeof icons;
    readonly onClick?: () => void;
}

const OptionalButton: FC<IButton> = ({theme}) => {

    const image = icons[theme];

    return (
        <button className={styles.button}>
            <img className={styles.image} src={image} alt={theme} />
        </button>
    )
}

export default OptionalButton;