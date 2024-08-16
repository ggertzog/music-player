import { Track } from "@/features/audio-player/model/songSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteSongsList = {
    favoriteSongs: Track[],
}

const initialState: FavoriteSongsList = {
    favoriteSongs: [],
}

const favoriteSongSlice = createSlice({
    name: 'favoriteSong',
    initialState,
    reducers : {
        addSongToFavorites: (state, action: PayloadAction<Track>) => {
            console.log('Добавляем песню:', action.payload);
            
            state.favoriteSongs.unshift(action.payload);
        },
    },
});

export const { addSongToFavorites } = favoriteSongSlice.actions;
export default favoriteSongSlice.reducer;