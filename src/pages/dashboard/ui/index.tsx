import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { Content } from '@/pages/dashboard/ui/content';
import { PersonalList } from '@/widgets/personal-list';
import useResize from '@/features/resize';

interface DashboardParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Dashboard: React.FC<DashboardParams> = ({audioRef}) => {

    const width = useResize();

    return (
        <div className={styles.dashboard}>
            {width > 860 && <Navigation />}
            
            <Content audioRef={audioRef} />
            {width > 1440 ? <PersonalList /> : null }
        </div>
    )
}