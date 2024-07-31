import React from 'react';
import styles from './styles.module.scss';
import { RecentlySong } from '@/entities/recently-song';

interface SongParams {
    id: number;
    image: string;
    title: string;
    counter: string;
}

interface SongsListParams {
    songs: SongParams[];
}

export const SongsList: React.FC<SongsListParams> = ({songs}) => {
    return (
        <div className={styles.songs}>
            {songs.map(({id, image, title, counter}) => (
                    <RecentlySong 
                        key={id} 
                        image={image} 
                        title={title} 
                        counter={counter} 
                    />
                )
            )}
        </div>
    )
}