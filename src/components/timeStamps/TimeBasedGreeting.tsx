import React from 'react';

interface Props {
  render: (greeting: string) => React.ReactNode;
}

const TimeBasedGreeting: React.FC<Props> = ({ render }) => {
  const date = new Date();
  const hour = date.getHours();
  let greeting = 'Hello';

  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return <>{render(greeting)}</>;
};

export default TimeBasedGreeting;
