import React from 'react';
import { ChatBoxProps, Message } from '../types/global.types';
import { useUserContext } from '../contexts/userContext';

const ChatBox = ({ chatLog }: ChatBoxProps): JSX.Element => {
  const { user } = useUserContext();
  console.log('user', user);
  const chatLogRenders = chatLog.map((chatEntry: Message, index: number) => (
    <div
      className={
        user.username === chatEntry.username ? 'rightAlign' : 'leftAlign'
      }
      key={`cL${index}`}>
      <div>{chatEntry.username}</div>
      <div>{chatEntry.text}</div>
    </div>
  ));

  return <div>{chatLogRenders}</div>;
};

export default ChatBox;
