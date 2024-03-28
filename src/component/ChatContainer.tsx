import React, { useState } from 'react';
import { Message } from '../types/global.types.ts';
import ChatBox from './ChatBox.tsx';
import InputText from './InputText.tsx';

const ChatContainer = (): JSX.Element => {
  const [chatLog, setChatLog] = useState<Message[]>([
    { username: 'paul', text: 'hi' },
  ]);

  const handleSend = (text: string): void => {
    setChatLog((prevChatLog) => [...prevChatLog, { username: 'me', text }]);
  };

  return (
    <>
      <div>ChatContainer</div>
      <ChatBox chatLog={chatLog}></ChatBox>
      <InputText handleSend={handleSend}></InputText>
    </>
  );
};

export default ChatContainer;
