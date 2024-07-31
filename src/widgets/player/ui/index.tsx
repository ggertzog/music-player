import React from 'react';
import styles from './styles.module.scss';
import { AudioPlayer } from '@/features/audio-player';

interface PlayerParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Player: React.FC<PlayerParams> = ({audioRef}) => {
    return (
        <div className={styles.player}>
            <AudioPlayer audioRef={audioRef} />
        </div>
    )
}