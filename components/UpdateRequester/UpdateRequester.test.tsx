import { render, fireEvent } from '@testing-library/react';
import UpdateRequester from './UpdateRequester';

const TEST_ID = 'TEST'

describe('UpdateRequester', () => {
  it('should be defined', () => {
    expect(UpdateRequester)
  })

  it('should update on click', () => {
    const mock = jest.fn()
    const time = new Date()
    const { container } = render(<UpdateRequester onRequestUpdate={mock} dataTestid={TEST_ID} currentTime={time} />)

    const refreshIcon = container.querySelector('* >span input')

    expect(refreshIcon).toBeInTheDocument();
    fireEvent.click(refreshIcon as HTMLElement);

    expect(mock).toHaveBeenCalled()
  })

  it('should have a rotate class if rotate prop is true', () => {
    const mock = jest.fn()
    const time = new Date()
    const { container } = render(<UpdateRequester onRequestUpdate={mock} dataTestid={TEST_ID} currentTime={time} rotateIcon />)

    const iconWrapper = container.querySelector('* >span div')

    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass('rotate');
  })
})