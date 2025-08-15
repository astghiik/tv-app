import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary';
}

const colors: Record<('primary' | 'secondary'), string> = {
  primary: 'bg-linear-to-r from-purple-1 to-purple-2 text-white',
  secondary: 'bg-white text-black',
}

function Button({ children, onClick, type = 'button', color = 'primary' }: Props) {
  return (
    <button onClick={onClick} type={type} className={`text-3xl px-12 py-4 rounded-full font-bold ${colors[color]}`}>
      {children}
    </button>
  )
}

export default Button;
