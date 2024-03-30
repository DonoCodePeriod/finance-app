export interface ChatBoxProps {
  chatLog: Array<Message>;
}
export interface InputTextProps {
  handleSend: (text: string) => void;
}

export interface Message {
  username: string;
  text: string;
}

export interface User {
  username: string;
}
