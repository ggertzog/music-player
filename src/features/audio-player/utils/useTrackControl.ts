import { RefObject, useCallback, useEffect } from "react";
import { Track, useTrack } from "./audioContext";

interface TrackControlParams {
    audioRef: RefObject<HTMLAudioElement>;
    data: Track[];
    setCurrentTrack: (track: Track) => void;
    currentTrack: Track; // Добавлено для отслеживания текущего трека
}

export const useTrackControl = ({ audioRef, data, setCurrentTrack, currentTrack }: TrackControlParams) => {
    const { isPlaying, setIsPlaying } = useTrack();

    const playTrack = useCallback(() => {
        if (audioRef.current) {
            setIsPlaying(true);
            audioRef.current.play();
        }
    }, [audioRef, setIsPlaying]);

    const pauseTrack = useCallback(() => {
        if (audioRef.current) {
            setIsPlaying(false);
            audioRef.current.pause();
        }
    }, [audioRef, setIsPlaying]);

    const playNextTrack = useCallback(() => {
        if (data.length) {
            const currentIndex = data.findIndex(track => track.id === currentTrack.id);
            const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
            setCurrentTrack(data[newIndex]);
        }
    }, [data, setCurrentTrack, currentTrack]);

    const playPrevTrack = useCallback(() => {
        if (data.length) {
            const currentIndex = data.findIndex(track => track.id === currentTrack.id);
            const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
            setCurrentTrack(data[newIndex]);
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

    return { playTrack, pauseTrack, playNextTrack, playPrevTrack, isPlaying, setIsPlaying };
};
