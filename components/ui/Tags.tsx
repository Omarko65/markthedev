import React from 'react'

type TagProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};


export const Tags = ({children, variant = 'primary'}: TagProps) => {
  const baseStyles = 'rounded-4xl font-light px-4 py-2 text-sm';

  const variants = {
    primary: 'bg-black text-white',
    secondary: 'border text-black',
  }

  return (
    <div className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </div>
  )
}
