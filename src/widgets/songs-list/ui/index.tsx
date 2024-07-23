import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { Song } from "@/entities/song";
import data from '../model/mock-data';
import headphones from '@/shared/assets/icons/headphones.svg'
import { Track, useTrack } from "@/features/audio-player/utils/audioContext";
import { useTrackControl } from "@/features/audio-player/utils/useTrackControl";

export const SongsList = () => {

    const [playingId, setPlayingId] = useState<number | null>(null);

    const { setCurrentTrack, audioRef, currentTrack } = useTrack();

    const { playTrack, pauseTrack } = useTrackControl({
        audioRef,
        data,
        setCurrentTrack,
        currentTrack: currentTrack!,
    });

    const { setIsPlaying } = useTrack();

    const handlePlay = (id: number, track: Track): void => {
        if (setCurrentTrack && audioRef?.current) {
            setCurrentTrack(track);
            setPlayingId(prevId => {
                if (prevId === id) {
                    pauseTrack();
                    setIsPlaying(false);
                    return null;
                } else {
                    setIsPlaying(true);
                    return id;
                }
            });

            audioRef.current.oncanplay = () => {
                playTrack();
            };
        }
    };

    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.onended = () => {
                setPlayingId(null);
                setIsPlaying(false);
            };
        }
    }, [audioRef, setIsPlaying]);
    
    return (
        <div className={styles['songs-list']}>
            <div className={styles.container}>
                <img className={styles.image} src={headphones} alt="Icon" />
                <h2 className={styles.title}>Top Music</h2>
            </div>
            <div className={styles.box}>
                {data.map((item) => {                    
                    return (
                        <Song 
                            key={item.id}
                            id={item.id}
                            number={item.id} 
                            artist={item.artist} 
                            image={item.image} 
                            song={item.song} 
                            duration={item.duration}
                            onClick={() => handlePlay(item.id, item)}
                            isPlaying={playingId === item.id}
                        />
                    )  
                })}
            </div>
        </div>
    )
}
