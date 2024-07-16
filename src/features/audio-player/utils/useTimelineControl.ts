import { ChangeEvent, RefObject, useEffect, useState } from "react";

export const useTimelineControl = (audioRef: RefObject<HTMLAudioElement>) => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadeddata', handleDurationChange);
        }
        return () => {
            if(audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('loadeddata', handleDurationChange);
            }
        }
    }, []);

    const handleTimeUpdate = () => {
        if(audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleDurationChange = () => {
        if(audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    };

    const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
        if(audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(audioRef.current.currentTime)
        }
    };

    return {currentTime, duration, handleSeek};
};