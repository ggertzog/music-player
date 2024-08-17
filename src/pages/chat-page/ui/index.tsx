import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { PersonalList } from '@/widgets/personal-list';
import { Chat } from '@/widgets/chat';
import useResize from '@/features/resize';
import { SideBar } from '@/features/sidebar';

export const ChatPage = () => {

    const width = useResize();

    return (
        <div className={styles['chat-page']}>
            {width < 860 && <SideBar />}
            {width > 860 && <Navigation />}
            <Chat />
            {width > 1440 && <PersonalList />}
        </div>
    )
}
