import React, { FC } from 'react';

export interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className="bg-red-500 rounded">{label}</button>;
};

export default Button;
