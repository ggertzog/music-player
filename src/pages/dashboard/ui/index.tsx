import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { Content } from '@/widgets/content';
import { PersonalList } from '@/widgets/personal-list';

export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Navigation />
            <Content />
            <PersonalList />
        </div>
    )
}