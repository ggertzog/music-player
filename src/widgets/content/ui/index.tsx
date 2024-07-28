import React from "react";
import styles from './styles.module.scss';
import { SearchForm } from "@/features/search-form";
import { DiscoverGenre } from "@/widgets/discover-genre";
import { SongsList } from "@/widgets/songs-list";

interface ContentParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}


export const Content: React.FC<ContentParams> = ({audioRef}) => {
    return (
        <div className={styles.container}>
            <SearchForm />
            <DiscoverGenre />
            <SongsList audioRef={audioRef} />
        </div>
    )
}