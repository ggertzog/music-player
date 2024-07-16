import { ChangeEvent, RefObject, useCallback, useState } from "react";

export const useVolumeControl = (audioRef: RefObject<HTMLAudioElement>) => {

    const [volume, setVolume] = useState<number>(1);

    const handleVolumeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if(audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    }, [audioRef]);

    return {volume, handleVolumeChange};
}