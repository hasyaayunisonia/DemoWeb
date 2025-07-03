// __tests__/GreetingButton.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GreetingButton from '../GreetingButton';
import * as greetingService from '../../../services/greetingService';

// 1. Mock dependency
jest.mock('../../../services/greetingService');

describe('GreetingButton Component', () => {
  const mockFetchGreeting = greetingService.fetchGreeting as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render button', () => {
    render(<GreetingButton name="Hasya" />);
    expect(screen.getByText('Greet')).toBeInTheDocument(); // Render test
  });

  test('should call fetchGreeting and show greeting message on click', async () => {
    // 2. Mock async function
    mockFetchGreeting.mockResolvedValue('Hello, Hasya!');

    render(<GreetingButton name="Hasya" />);
    fireEvent.click(screen.getByText('Greet')); // Event test

    await waitFor(() => {
      expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Hasya!'); // Async test
    });

    expect(mockFetchGreeting).toHaveBeenCalledWith('Hasya'); // Props passed to function
  });

  test('should call onGreet callback prop with message', async () => {
    mockFetchGreeting.mockResolvedValue('Hello, Sonia!');
    const mockOnGreet = jest.fn();

    render(<GreetingButton name="Sonia" onGreet={mockOnGreet} />);
    fireEvent.click(screen.getByText('Greet'));

    await waitFor(() => {
      expect(mockOnGreet).toHaveBeenCalledWith('Hello, Sonia!'); // Props test
    });
  });
});
