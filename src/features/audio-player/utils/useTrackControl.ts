import { RefObject, useCallback, useEffect } from 'react';
import { Track } from '../model/songSlice';
import { setIsPlaying, setCurrentTrack } from '../model/songSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';

interface TrackControlParams {
    audioRef: RefObject<HTMLAudioElement>;
    data: Track[];
    currentTrack: Track; // Добавлено для отслеживания текущего трека
}

export const useTrackControl = ({ audioRef, data, currentTrack }: TrackControlParams) => {
    const isPlaying = useSelector((state: RootState) => state.song.isPlaying);
    const dispatch = useDispatch();

    const playTrack = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                dispatch(setIsPlaying(true));
            }).catch(error => {
                console.error('Ошибка воспроизведения:', error);
            })
        }
    }, [dispatch]);

    const pauseTrack = useCallback(() => {
        if (audioRef.current) {
            dispatch(setIsPlaying(false));
            audioRef.current.pause();            
        }
    }, [dispatch]);

    const playNextTrack = useCallback(() => {
        if (data.length) {
            const currentIndex = data.findIndex(track => track.id === currentTrack.id);
            const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
            dispatch(setCurrentTrack(data[newIndex]));
        }
    }, [data, setCurrentTrack, currentTrack]);

    const playPrevTrack = useCallback(() => {
        if (data.length) {
            const currentIndex = data.findIndex(track => track.id === currentTrack.id);
            const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
            dispatch(setCurrentTrack(data[newIndex]));
        }
    }, [data, setCurrentTrack, currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioRef]);

    return { playTrack, pauseTrack, playNextTrack, playPrevTrack };
};
