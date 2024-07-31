import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { Content } from '@/pages/dashboard/ui/content';
import { PersonalList } from '@/widgets/personal-list';

interface DashboardParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Dashboard: React.FC<DashboardParams> = ({audioRef}) => {
    return (
        <div className={styles.dashboard}>
            <Navigation />
            <Content audioRef={audioRef} />
            <PersonalList />
        </div>
    )
}