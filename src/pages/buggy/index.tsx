import React from 'react';

const BuggyComponent: React.FC = () => {
  throw new Error('Simulasi error untuk testing Error Boundary!');
};

export default BuggyComponent;
