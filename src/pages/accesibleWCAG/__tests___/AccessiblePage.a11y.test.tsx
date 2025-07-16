import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import AccessiblePage from '../index';
import AccessibleModal from '../../../components/molecules/mui/AccessibleModal';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('AccessiblePage', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<AccessiblePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('AccessibleModal', () => {
  it('should have no accessibility violations when open', async () => {
    const handleClose = jest.fn();
    const { container } = render(<AccessibleModal open={true} onClose={handleClose} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should set focus to first input when modal is opened', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(<AccessibleModal open={true} onClose={handleClose} />);
    const firstInput = getByLabelText(/Nama Lengkap/i);
    expect(document.activeElement).toBe(firstInput);
  });

  it('should close modal when Escape is pressed', async () => {
    const handleClose = jest.fn();
    render(<AccessibleModal open={true} onClose={handleClose} />);
    const [dialog] = screen.getAllByRole('dialog');
    expect(dialog).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });
});
