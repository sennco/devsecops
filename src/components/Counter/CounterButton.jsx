import React from 'react';

const CounterButton = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default CounterButton;
