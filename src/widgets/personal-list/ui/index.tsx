import React from "react";
import styles from './styles.module.scss';
import { User } from "@/entities/user";
import { Artist } from "@/entities/artist";
import data from '../model/artist-data';
import songs from "../model/songs-data";
import { RecentlySong } from "@/entities/recently-song";

export const PersonalList = () => {
    return (
        <div className={styles.container}>
            <User />
            <div className={styles.box}>
                <h2 className={styles.title}>Top Artist</h2>
                <div className={styles.artists}>
                    {data.map((item) => {
                        return (
                            <Artist 
                                key={item.id}
                                name={item.name}
                                avatar={item.avatar}
                                album={item.albums}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={styles.box}>
                <h2 className={styles.title}>Recently Played</h2>
                <div className={styles.songs}>
                    {songs.map((item) => {
                        return (
                            <RecentlySong key={item.id} image={item.image} title={item.title} counter={item.counter} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}