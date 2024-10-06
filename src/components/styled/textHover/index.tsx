import React from 'react';

const TextHover = ({ children, forceStyle, color = 'indigo-500' }: { children: React.ReactNode, forceStyle?: boolean, color?: string }) => {

  return (
    <span className={`
      ${!forceStyle ? 'group' : 'text-t-dark font-bold'}
    `}>
      <span className={`
        relative z-10 leading-none 
        ${!forceStyle ? `group-hover:text-${color} transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4` : ''}
      `}>
        {children}
      </span>
    </span>
  );
};

export default TextHover;
