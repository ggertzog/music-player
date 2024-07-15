import React, { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import play from '@/shared/assets/icons/control-play.svg';
import pause from '@/shared/assets/icons/control-pause.svg';
import next from '@/shared/assets/icons/control-next.svg';
import prev from '@/shared/assets/icons/control-prev.svg';
import forward from '@/shared/assets/icons/control-forward.svg';
import rewind from '@/shared/assets/icons/control-rewind.svg';

const icons = {
    play,
    pause,
    next,
    prev,
    forward,
    rewind
}

interface IButton {
    readonly theme: keyof typeof icons;
    readonly onClick?: () => void;
}

const cn = classNames.bind(styles);

const ControlButton: FC<IButton> = ({theme, onClick}) => {

    const image = icons[theme];

    return (
        <button className={cn('button')} onClick={onClick}>
            <img className={styles.image} src={image} alt={theme} />
        </button>
    )
}

export default ControlButton;