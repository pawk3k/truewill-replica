import React, { CSSProperties } from 'react';
import './button.css';

interface Button {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export const Button = ({ primary = false, backgroundColor, size, label }: Button) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      {label}
    </button>
  );
};
