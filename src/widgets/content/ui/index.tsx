import React from "react";
import styles from './styles.module.scss';
import { SearchForm } from "@/features/search-form";
import { DiscoverGenre } from "@/widgets/discover-genre";
import { SongsList } from "@/widgets/songs-list";

export const Content = () => {
    return (
        <div className={styles.container}>
            <SearchForm />
            <DiscoverGenre />
            <SongsList />
        </div>
    )
}