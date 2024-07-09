import React from 'react';
import styles from './styles.module.scss';
import ControlButton from '@/shared/ui/control-button';
import volume from '@/shared/assets/icons/volume.svg';
import OptionalButton from '@/shared/ui/optional-button';
import OptionalInput from '@/shared/ui/optional-input';

export const Player = () => {
    return (
        <div className={styles.player}>
            <div className={styles.decription}>
                <img className={styles.image} src='https://images.universal-music.de/img/assets/421/421163/195/the-weeknd-2016.jpg' alt='weeknd'/>
                <div className={styles.box}>
                    <p className={styles.song}>The Hills</p>
                    <h2 className={styles.artist}>The Weeknd</h2>
                </div>
            </div>
            <div className={styles['control-panel']}>
                <ControlButton theme = 'rewind' />
                <ControlButton theme = 'prev' />
                <ControlButton theme = 'play' />
                <ControlButton theme = 'next' />
                <ControlButton theme = 'forward' />
            </div>
            <OptionalInput type='l' />
            {/* <input className={styles.input} type='range' /> */}
            <div className={styles['volume-box']}>
                <img className={styles['volume-icon']} src={volume} alt="Громкость" />
                <OptionalInput type='s' />
                {/* <input className={styles['volume-slider']} type='range' /> */}
            </div>
            <div className={styles['optional-container']}>
                <OptionalButton theme = 'shuffle' />
                <OptionalButton theme = 'replay' />
                <OptionalButton theme = 'heart' />
                <OptionalButton theme = 'share' />
            </div>
        </div>
    )
}