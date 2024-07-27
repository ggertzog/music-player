import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

interface MessageParams {
    id: number;
    name: string;
    date: string;
    avatar: string;
    message: string;
    isCurrentUser: boolean | undefined;
}

export const Message: React.FC<MessageParams> = ({name, date, avatar, message, isCurrentUser}) => {

    const cx = classNames.bind(styles);

    return (
        <div className={cx('message', isCurrentUser && 'message_type_owner')}>
            <img className={styles.avatar} src={avatar} alt="Аватар" />
            <div className={styles.container}>
                <div className={styles.disc}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.date}>{date}</p>
                </div>
                <div className={cx('message-box', isCurrentUser && 'message-box_type_owner')}>
                    <p className={styles['message-text']}>{message}</p>
                </div>
            </div>
        </div>
    )
}
