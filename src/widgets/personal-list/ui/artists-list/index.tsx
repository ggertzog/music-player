import React from 'react'
import styles from './styles.module.scss';
import { Artist } from '@/entities/artist';

interface ArtistParams {
    id: number;
    name: string;
    albums: number;
    avatar: string;
}

interface ArtistListParams {
    data: ArtistParams[];
}

export const ArtistList: React.FC<ArtistListParams> = ({data}) => {
    return (
        <div className={styles.artists}>
            {data.map(({id, name, avatar, albums}) => (
                    <Artist 
                        key={id}
                        name={name}
                        avatar={avatar}
                        album={albums}
                    />
                )
            )}
        </div>
    )
}
