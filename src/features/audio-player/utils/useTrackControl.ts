import { RefObject, useCallback, useEffect, useState } from "react";
import { Track, useTrack } from "./audioContext";

interface TrackControlParams {
    audioRef?: RefObject<HTMLAudioElement>;
    data?: Track[];
    setCurrentTrack?: (track: Track) => void;
}

export const useTrackControl = ({audioRef, data, setCurrentTrack} : TrackControlParams) => {

    // currentTrackIndex не нужен
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const {isPlaying, setIsPlaying} = useTrack();

    const playTrack = useCallback(() => {
        if (audioRef?.current) {
            setIsPlaying(true);
            audioRef.current.play();
        }
    }, [audioRef]);

    const pauseTrack = useCallback(() => {
        if (audioRef?.current) {
            setIsPlaying(false);
            audioRef.current.pause();
        }
    }, [audioRef]);

    const playNextTrack = useCallback(() => {
        if (data && setCurrentTrack) {
            setCurrentTrackIndex((prevIndex) => {
                const newIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
                setCurrentTrack(data[newIndex]);
                return newIndex;
            });
        }
    }, [data, setCurrentTrack]);

    const playPrevTrack = useCallback(() => {
        if (data && setCurrentTrack) {
            setCurrentTrackIndex((prevIndex) => {
                const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
                setCurrentTrack(data[newIndex]);
                return newIndex;
            });
        }
    }, [data, setCurrentTrack]);

    useEffect(() => {
        if (audioRef?.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioRef]);

    return {playTrack, pauseTrack, playNextTrack, playPrevTrack, isPlaying, setIsPlaying}
}