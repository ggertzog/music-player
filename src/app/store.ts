import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '@/features/chat-hook/model/slice';
import songReducer from '@/features/audio-player/model/songSlice';
import favoriteSongReducer from '@/features/add-to-favorite/model/favoriteSongSlice';

const store = configureStore({
    reducer: {
        chat: chatReducer,
        song: songReducer,
        favoriteSong: favoriteSongReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;