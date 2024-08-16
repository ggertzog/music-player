import React, { useEffect } from "react";
import styles from './styles.module.scss';
import data from '../model/mock-data';
import headphones from '@/shared/assets/icons/headphones.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack, setIsPlaying, Track } from '@/features/audio-player/model/songSlice';
import { useTrackControl } from "@/features/audio-player/utils/useTrackControl";
import { RootState } from "@/app/store";
import { SongsList } from "./songs-list";

interface SongListParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const SongsWidget: React.FC<SongListParams> = ({audioRef}) => {
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

    // Добавить логику включения следующей песни
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
            <SongsList data={data} handlePlay={handlePlay} currentTrack={currentTrack} isPlaying={isPlaying} />
            <audio ref={audioRef} />
        </div>
    );
};
