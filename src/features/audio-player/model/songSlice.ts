import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Track = {
    id: number;
    artist: string;
    song: string;
    duration: number;
    image: string;
    audioSrc: string;
};

type TrackState = {
    currentTrack: Track | null,
    isPlaying: boolean,
}

const initialState: TrackState = {
    currentTrack: null,
    isPlaying: false,
};


const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setCurrentTrack(state, action: PayloadAction<Track>) {
            state.currentTrack = action.payload;
        },
        clearCurrentTrack(state) {
            state.currentTrack = null;
        },
        setIsPlaying(state, action: PayloadAction<boolean>) {
            state.isPlaying = action.payload;
        },
    },
});

export const { setCurrentTrack, clearCurrentTrack, setIsPlaying } = songSlice.actions;

export default songSlice.reducer;