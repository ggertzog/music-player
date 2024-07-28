import React from 'react';
import styles from './styles.module.scss';
// import volume from '@/shared/assets/icons/volume.svg';
// import OptionalButton from '@/shared/ui/optional-button';
// import OptionalInput from '@/shared/ui/optional-input';
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