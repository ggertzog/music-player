import React, { createContext, ReactNode, useContext, useState } from "react";

// создать тип для трека
export type Track = {
    id: number;
    artist: string;
    song: string;
    duration: number;
    image: string;
    audioSrc: string;
}
// создать тип для контекста

type TrackContextType = {
    currentTrack: Track | null;
    setCurrentTrack: (track: Track) => void;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export const useTrack = () => {
    const context = useContext(TrackContext);
    if(!context) {
        throw new Error('Ошибка контекста')
    }
    return context;
}

export const TrackProvider = ({children}: {children: ReactNode}) => {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    return (
        <TrackContext.Provider value={{ currentTrack, setCurrentTrack}}>
            {children}
        </TrackContext.Provider>
    )
}