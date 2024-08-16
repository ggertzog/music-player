import React from 'react';
import styles from './styles.module.scss';
import { User } from '@/entities/user';
import data from '../model/artist-data';
import songs from '../model/songs-data';
import useResize from '@/features/resize';
import person from '@/shared/assets/icons/person.svg';
import { ListRenderer } from '@/features/list-renderer/ui';
import { Artist } from '@/entities/artist';
import { RecentlySong } from '@/entities/recently-song';

export const PersonalList = () => {

    const width = useResize();

    return (
        <div className={styles['personal-list']}>
            {width > 1440 ? <User /> : (
                <div className={styles.description}>
                    <img className={styles.image} src={person} alt="Нота"/>
                    <h2 className={styles.title}>Personal List</h2>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.box}>
                    <h3 className={styles.subtitle}>Top Artists</h3>
                    <ListRenderer 
                        data={data}
                        rendererItem={(item) => (
                            <Artist 
                                key={item.id}
                                name={item.name}
                                avatar={item.avatar}
                                album={item.albums}
                            />
                        )}
                        className={styles.list}
                    />
                </div>
                <div className={styles.box}>
                    <h3 className={styles.subtitle}>Recently Played</h3>
                    <ListRenderer 
                        data={songs}
                        rendererItem={(item) => (
                            <RecentlySong 
                                key={item.id} 
                                image={item.image} 
                                title={item.title} 
                                counter={item.counter} 
                            />
                        )}
                        className={styles.list}
                    />
                </div>
            </div>
        </div>
    )
}