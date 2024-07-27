import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { PersonalList } from '@/widgets/personal-list';
import { Chat } from '@/widgets/chat';

export const ChatPage = () => {
    return (
        <div className={styles['chat-page']}>
            <Navigation />
            <Chat />
            <PersonalList />
        </div>
    )
}
