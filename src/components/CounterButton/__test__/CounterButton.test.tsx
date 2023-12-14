import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterButton, { CounterButtonProps } from '..';

describe('Button component', () => {
  const onClickMock = jest.fn();

  const defaultProps: CounterButtonProps = {
    count: 0,
    setCount: onClickMock,
  };

  function renderComponent(props?: Partial<CounterButtonProps>) {
    render(<CounterButton {...defaultProps} />);
  }

  it('should render', () => {
    renderComponent();
    expect(screen.getByRole('button')).toHaveTextContent('0');
  });

  it('should invoke onClick callback', async () => {
    renderComponent();
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
