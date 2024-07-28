import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { Song } from "@/entities/song";
import data from '../model/mock-data';
import headphones from '@/shared/assets/icons/headphones.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack, setIsPlaying, Track } from '@/features/audio-player/model/songSlice';
import { useTrackControl } from "@/features/audio-player/utils/useTrackControl";
import { RootState } from "@/app/store";

interface SongListParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const SongsList: React.FC<SongListParams> = ({audioRef}) => {
    const dispatch = useDispatch();
    const currentTrack = useSelector((state: RootState) => state.song.currentTrack);
    const isPlaying = useSelector((state: RootState) => state.song.isPlaying);
    const { playTrack, pauseTrack } = useTrackControl({audioRef, data, currentTrack: currentTrack!});


    const handlePlay = (id: number, track: Track) => {
        if (audioRef.current) {
            if (currentTrack?.id === id) {
                if (isPlaying) {
                    pauseTrack();
                    dispatch(setIsPlaying(false));
                } else {
                    playTrack();
                    dispatch(setIsPlaying(true));
                }
            } else {
                dispatch(setCurrentTrack(track));
                dispatch(setIsPlaying(true));
                audioRef.current.src = track.audioSrc;
                audioRef.current.oncanplay = () => {
                    playTrack();
                };
            }
        }
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onended = () => {
                dispatch(setIsPlaying(false));
            };
        }
    }, [audioRef, dispatch]);

    return (
        <div className={styles['songs-list']}>
            <div className={styles.container}>
                <img className={styles.image} src={headphones} alt="Icon" />
                <h2 className={styles.title}>Top Music</h2>
            </div>
            <div className={styles.box}>
                {data.map((item) => (
                    <Song 
                        key={item.id}
                        id={item.id}
                        number={item.id} 
                        artist={item.artist} 
                        image={item.image} 
                        song={item.song} 
                        duration={item.duration}
                        onClick={() => handlePlay(item.id, item)}
                        isPlaying={currentTrack?.id === item.id && isPlaying}
                    />
                ))}
            </div>
            <audio ref={audioRef} />
        </div>
    );
};
