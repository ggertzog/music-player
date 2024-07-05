import React from "react";
import styles from './styles.module.scss';
import { Song } from "@/entities/song";
import data from '../model/mock-data';
import headphones from '@/shared/assets/icons/headphones.svg'

export const SongsList = () => {
    return (
        <div className={styles['songs-list']}>
            <div className={styles.container}>
                <img className={styles.image} src={headphones} alt="Icon" />
                <h2 className={styles.title}>Top Music</h2>
            </div>
            <div className={styles.box}>
                {data.map((item) => {
                    return <Song key={item.id} artist={item.artist} image={item.image} song={item.song} duration={item.duration} />
                })}
            </div>
        </div>
    )
}