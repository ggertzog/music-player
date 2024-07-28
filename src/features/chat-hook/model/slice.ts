import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const initialState: ChatState = {
    messages: [],
    newMessage: '',
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<Message[]>) {
            state.messages = action.payload;
        },
        addMessage(state, action: PayloadAction<Message>) {
            state.messages.push(action.payload);
        },
        setNewMessage(state, action: PayloadAction<string>) {
            state.newMessage = action.payload
        },
    },
});

export const { setMessages, addMessage, setNewMessage } = chatSlice.actions;

export default chatSlice.reducer;