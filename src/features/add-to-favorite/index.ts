import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { addSongToFavorites } from "./model/favoriteSongSlice";
import { Track } from "../audio-player/model/songSlice";

const useAddToFavorite = () => {
    const dispatch = useDispatch();
    const favoriteSongs = useSelector((state: RootState) => state.favoriteSong.favoriteSongs);

    const handleAddFavoriteSong = (track: Track) => {
        dispatch(addSongToFavorites(track))
    }

    return {
        favoriteSongs,
        handleAddFavoriteSong,
    }
}

export default useAddToFavorite;