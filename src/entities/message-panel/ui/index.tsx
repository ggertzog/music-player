import React from 'react';
import styles from './styles.module.scss';
import share from '@/shared/assets/icons/share.svg';
import send from '@/shared/assets/icons/send.svg';
import smile from '@/shared/assets/icons/smile.svg';

interface MessagePanelParams {
  chatState: {
    messages: {id: number; 
      name: string; 
      avatar: string; 
      date: string; 
      message: string; 
      isCurrentUser: boolean | undefined;
    }[];
    newMessage: string;
  }
  onNewMessageChange: (newMessage: string) => void;
  onSendMessage: (message: string) => void;
}

export const MessagePanel: React.FC<MessagePanelParams> = ({chatState, onNewMessageChange, onSendMessage}) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && chatState.newMessage.trim() !== '') {
      event.preventDefault();
      onSendMessage(chatState.newMessage);
    }
  };

  return (
    <div className={styles['message-panel']}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder='Введите сообщение'
        onChange={(e) => onNewMessageChange(e.target.value)}
        value={chatState.newMessage}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.container}>
        <button className={styles.button}>
          <img className={styles.icon} src={smile} alt="Смайлы" />
        </button >
        <button className={styles.button}>
          <img className={styles.icon} src={share} alt="Поделиться" />
        </button>
        <button 
          className={styles.button}
          onClick={() => {
            if (chatState.newMessage.trim() !== '') {
                onSendMessage(chatState.newMessage);
            }
          }}
        >
          <img className={styles.icon} src={send} alt="Отправить" />
        </button>
      </div>
    </div>
  )
}
