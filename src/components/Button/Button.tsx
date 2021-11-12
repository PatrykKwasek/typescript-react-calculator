import React from 'react';

export const Button = ({ txt, type, value, onClick }: {
  type?: 'button' | 'submit' | 'reset' | undefined;
  txt: string;
  value: string;
  onClick: (e: any) => void;
}) => {
  return (
    <button type={type} value={value} onClick={onClick}>
      {txt}
    </button>
  )
}