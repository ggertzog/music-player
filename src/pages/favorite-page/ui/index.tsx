import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { PersonalList } from '@/widgets/personal-list';
import { FavoriteList } from '@/widgets/favorite-list';

export const FavoritePage = () => {
  return (
    <div className={styles['favorite-page']}>
        <Navigation />
        <FavoriteList />
        <PersonalList />
    </div>
  )
}
