import React, { useState } from 'react';
import { InputTextProps } from '../types/global.types';

const InputText = ({ handleSend }: InputTextProps): JSX.Element => {
  const [text, setText] = useState<string>('');

  return (
    <div className='InputText'>
      <textarea
        onChange={(e) => {
          console.log(e.target.value);
          return setText(e.target.value);
        }}
        value={text}></textarea>
      <button
        onClick={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleSend(text);
          setText('');
        }}>
        Send
      </button>
    </div>
  );
};

export default InputText;
