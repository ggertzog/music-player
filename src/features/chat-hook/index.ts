import { useEffect } from 'react';
import data from './model/mock-data';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages, addMessage, setNewMessage } from './model/slice';
import { RootState } from '@/app/store';

// interface Message {
//     id: number; 
//     name: string; 
//     avatar: string; 
//     date: string; 
//     message: string;
//     isCurrentUser: boolean | undefined;
// }

// interface ChatState {
//     messages: Message[];
//     newMessage: string;
// }

const useChat = () => {

    const dispatch = useDispatch();
    const chat = useSelector((state: RootState) => state.chat)

    // const [chat, setChat] = useState<ChatState>({
    //     messages: [],
    //     newMessage: '',
    // });

    useEffect(() => {
        // setChat({
        //     messages: data,
        //     newMessage: '',
        // });
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
            name: 'Володя', 
            avatar: 'https://img.razrisyika.ru/kart/35/1200/137476-putin-1.jpg', 
            date: getCurrentTime(), 
            message: message,
            isCurrentUser: true,
        }

        dispatch(addMessage(newMessage));
        dispatch(setNewMessage(''));
        // setChat((prevChat) => ({
        //     messages: [...prevChat.messages, newMessage],
        //     newMessage: '',
        // }))
    }

    return {
        chat,
        handleSendMessage,
    }
}

export default useChat;