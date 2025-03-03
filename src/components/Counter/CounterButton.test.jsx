import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterButton from './CounterButton'; 

test('deve renderizar o botão com o texto correto e chamar a função ao clicar', () => {
  const handleClick = jest.fn(); 

  render(<CounterButton onClick={handleClick}>Clique Aqui</CounterButton>);

  const button = screen.getByRole('button', { name: /clique aqui/i });


  expect(button).toBeInTheDocument();

  
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
