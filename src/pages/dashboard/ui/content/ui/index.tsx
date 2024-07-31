import React from "react";
import styles from './styles.module.scss';
import { SearchForm } from "@/features/search-form";
import { DiscoverGenre } from "@/widgets/discover-genre";
import { SongsWidget } from "@/widgets/songs-widget";

interface ContentParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Content: React.FC<ContentParams> = ({audioRef}) => {
    return (
        <div className={styles.container}>
            <SearchForm />
            <DiscoverGenre />
            <SongsWidget audioRef={audioRef} />
        </div>
    )
}