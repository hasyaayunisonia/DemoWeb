import React from 'react';

export function withTimestamp<P extends object>(
  Component: React.ComponentType<P & { timestamp: string }>,
) {
  const WrappedComponent: React.FC<Omit<P, 'timestamp'>> = props => {
    const timestamp = new Date().toLocaleTimeString();

    // Casting props agar P tetap dikenali
    return <Component {...(props as P)} timestamp={timestamp} />;
  };

  return WrappedComponent;
}
