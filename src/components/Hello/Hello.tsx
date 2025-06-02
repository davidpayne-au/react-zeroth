import { useState } from 'react';
import type { HelloProps } from './Hello.types';

/**
 * Renders a simple greeting message.
 */
export const Hello = ({ name, greeting = 'Hello' }: HelloProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      aria-label="greeting"
      className="p-8 rounded-2xl border border-gray-200 shadow transition-all text-center bg-white max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={`text-4xl font-bold mb-2 text-gray-900 transition-transform ${isHovered ? 'scale-105' : ''}`}>
        {greeting}, {name}!
      </h1>
      <p className="text-lg text-gray-500">Welcome to your React app</p>
    </section>
  );
};
