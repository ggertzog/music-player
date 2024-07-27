import { useEffect, useState } from 'react';
import data from './model/mock-data';

interface Message {
    id: number; 
    name: string; 
    avatar: string; 
    date: string; 
    message: string;
    isCurrentUser: boolean | undefined;
}

interface ChatState {
    messages: Message[];
    newMessage: string;
}

const useChat = () => {

    const [chat, setChat] = useState<ChatState>({
        messages: [],
        newMessage: '',
    });

    useEffect(() => {
        setChat({
            messages: data,
            newMessage: '',
        });
    }, []);

    const getCurrentTime = (): string => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `Сегодня в ${hours}:${minutes}`;
    };

    const handleSendMessage = (message: string) => {

        const newMessage: Message = {
            id: Date.now(), 
            name: 'Володя', 
            avatar: 'https://img.razrisyika.ru/kart/35/1200/137476-putin-1.jpg', 
            date: getCurrentTime(), 
            message: message,
            isCurrentUser: true,
        }

        setChat((prevChat) => ({
            messages: [...prevChat.messages, newMessage],
            newMessage: '',
        }))
    }

    return {
        chat,
        setChat,
        handleSendMessage,
    }
}

export default useChat;