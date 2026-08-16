import React from 'react';
import logoSrc from '@assets/image_1785776246578.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="BBC British Board Of Coaching"
      className={`h-14 w-auto object-contain ${className}`}
    />
  );
}
