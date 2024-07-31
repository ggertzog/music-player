import React from "react";
import styles from './styles.module.scss';
import note from '@/shared/assets/icons/note.svg';
import data from '../model/mock-data';
import { CardList } from "./card-list";

export const DiscoverGenre = () => {

    return (
        <div className={styles['list']}>
            <div className={styles.description}>
                <img className={styles.image} src={note} alt="Нота"/>
                <h2 className={styles.title}>Discover Genre</h2>
            </div>
            <div className={styles.container}>
                <CardList data={data}/>
            </div>
        </div>
    )
}