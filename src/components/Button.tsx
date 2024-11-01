import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  id?: string;
  href?: string; // Add href prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'small',
  disabled = false,
  id = '#',
  href, // Destructure href prop
}) => {
  // Define base classes for the button
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg uppercase text-sm transition-all duration-500 focus:outline-none`;

  // Variant styles
  const variantClasses = {
    primary: 'bg-orange text-white hover:bg-orange/0 hover:text-orange',
    secondary: 'bg-green text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }[variant];

  // Size styles
  const sizeClasses = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-12 py-4 text-base',
    large: 'px-24 py-8 text-lg',
  }[size];

  // Disabled style
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Render as a button or link based on the presence of href
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`}
        id={id}
        role="button" // Ensure it's recognized as a button
        aria-disabled={disabled} // Indicate if the link is disabled
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
