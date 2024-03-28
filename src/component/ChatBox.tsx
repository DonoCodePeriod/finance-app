import React from 'react';
import { ChatBoxProps, Message } from '../types/global.types';

const ChatBox = ({ chatLog }: ChatBoxProps): JSX.Element => {
  const chatLogRenders = chatLog.map((chatEntry: Message, index: number) => (
    <div key={`cL${index}`}>
      <div>{chatEntry.username}</div>
      <div>{chatEntry.text}</div>
    </div>
  ));

  return <div>{chatLogRenders}</div>;
};

export default ChatBox;
