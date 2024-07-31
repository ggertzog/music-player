import React from 'react';
import styles from './styles.module.scss';
import { User } from '@/entities/user';
import data from '../model/artist-data';
import songs from '../model/songs-data';
import { ArtistList } from './artists-list';
import { SongsList } from './songs-list';

export const PersonalList = () => {
    return (
        <div className={styles.container}>
            <User />
            <div className={styles.box}>
                <h2 className={styles.title}>Top Artists</h2>
                <ArtistList data={data} />
            </div>
            <div className={styles.box}>
                <h2 className={styles.title}>Recently Played</h2>
                <SongsList songs={songs} />
            </div>
        </div>
    )
}