import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import dots from '@/shared/assets/icons/dots.svg';
import { Message } from '@/entities/message';
import { MessagePanel } from '@/entities/message-panel/ui';
import useChat from '@/features/chat-hook';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setNewMessage } from '@/features/chat-hook/model/slice';

export const Chat: React.FC = () => {

    const { chat, handleSendMessage } = useChat();
    const messages = useSelector((state: RootState) => state.chat.messages);
    const messageListRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [chat.messages])

    return (
        <div className={styles.chat}>
            <div className={styles['chat-header']}>
                <div className={styles.box}>
                    <button className={styles.button}>
                        <img className={styles.icon} src={dots} alt="Настройки" />
                    </button>
                    <p className={styles.title}>Участники чата</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.avatar} src="https://www.eventworld.co/blob/images/pg/post-malone_7e113_opgh.jpg" alt="" />
                    <img className={styles.avatar} src="https://fotoslava.ru/wp-content/uploads/biliaishli-2.webp" alt="" />
                    <img className={styles.avatar} src="https://lastfm.freetls.fastly.net/i/u/ar0/a68a28bd28e75be45074d07d26cb356a.jpg" alt="" />
                </div>
            </div>
            <div className={styles['message-list']} ref={messageListRef}>
                {messages.map((item) => (
                    <Message 
                        key={item.id}
                        id={item.id}
                        name={item.name} 
                        avatar={item.avatar} 
                        date={item.date}
                        message={item.message}
                        isCurrentUser={item.isCurrentUser}
                    />
                ))}
            </div>
            <MessagePanel 
                chatState={chat}
                onNewMessageChange = {(newMessage) => dispatch(setNewMessage(newMessage))}
                onSendMessage={(message) => handleSendMessage(message)}
            />
        </div>
    )
}