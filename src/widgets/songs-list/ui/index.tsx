import React, { useState } from "react";
import styles from './styles.module.scss';
import { Song } from "@/entities/song";
import data from '../model/mock-data';
import headphones from '@/shared/assets/icons/headphones.svg'
import { Track, useTrack } from "@/features/audio-player/utils/audioContext";

export const SongsList = () => {

    const [playingId, setPlayingId] = useState<number | null>(null);

    const {setCurrentTrack, currentTrack} = useTrack();

    const handlePlay = (id: number): void => {
        setPlayingId(prevId => (prevId === id ? null : id));
    }
    
    
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
                            onClick={() => {
                                setCurrentTrack(item);
                                handlePlay(item.id);
                            }}
                            isPlaying={playingId === item.id}
                        />
                    )  
                })}
            </div>
        </div>
    )
}