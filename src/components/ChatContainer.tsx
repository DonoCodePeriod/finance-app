import React, { useState } from 'react';
import { Message } from '../types/global.types.ts';
import { useUserContext } from '../contexts/UserContext.tsx';
import ChatBox from './ChatBox.tsx';
import InputText from './InputText.tsx';

const ChatContainer = (): JSX.Element => {
  const { user, logout } = useUserContext();
  const [chatLog, setChatLog] = useState<Message[]>([]);

  const handleSend = (text: string): void => {
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { username: user.username, text },
    ]);
  };

  return (
    <>
      <div>ChatContainer</div>
      <div>
        <button onClick={logout}></button>
      </div>
      <ChatBox chatLog={chatLog}></ChatBox>
      <InputText handleSend={handleSend}></InputText>
    </>
  );
};

export default ChatContainer;
