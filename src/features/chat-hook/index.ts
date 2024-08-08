import { useEffect } from 'react';
import data from './model/mock-data';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages, addMessage, setNewMessage } from './model/slice';
import { RootState } from '@/app/store';

const useChat = () => {

    const dispatch = useDispatch();
    const chat = useSelector((state: RootState) => state.chat)

    useEffect(() => {
        dispatch(setMessages(data))
    }, [dispatch]);

    const getCurrentTime = (): string => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `Сегодня в ${hours}:${minutes}`;
    };

    const handleSendMessage = (message: string) => {

        const newMessage = {
            id: Date.now(), 
            name: 'Илон', 
            avatar: 'https://autopeople.ru/article/wp-content/uploads/2020/12/ilon-mask-scaled.jpg', 
            date: getCurrentTime(), 
            message: message,
            isCurrentUser: true,
        }

        dispatch(addMessage(newMessage));
        dispatch(setNewMessage(''));
    }

    return {
        chat,
        handleSendMessage,
    }
}

export default useChat;