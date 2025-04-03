import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Convert from './Convert';

describe('Convert component', () => {
  it('should render formatted value when value is not null or undefined', () => {
    render(<Convert formatter={(value) => `Number: ${value}`} value={42} />);

    expect(screen.getByText('Number: 42')).toBeInTheDocument();
  });

  it('should render defaultValue when value is null', () => {
    render(<Convert defaultValue="Default Value" formatter={(value) => `Should not render: ${value}`} value={null} />);

    expect(screen.getByText('Default Value')).toBeInTheDocument();
    expect(screen.queryByText(/Should not render/)).not.toBeInTheDocument();
  });

  it('should render defaultValue when value is undefined', () => {
    render(
      <Convert defaultValue="Default Value" formatter={(value) => `Should not render: ${value}`} value={undefined} />,
    );

    expect(screen.getByText('Default Value')).toBeInTheDocument();
    expect(screen.queryByText(/Should not render/)).not.toBeInTheDocument();
  });

  it('should render nothing when value is null and no defaultValue is provided', () => {
    const { container } = render(<Convert formatter={(value) => `Should not render: ${value}`} value={null} />);

    expect(screen.queryByText(/Should not render/)).not.toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });

  it('should handle complex values and formatters', () => {
    const user = { name: 'John', age: 30 };

    render(
      <Convert
        value={user}
        formatter={(u) => (
          <div data-testid="user-info">
            <h1>{u.name}</h1>
            <p>Age: {u.age}</p>
          </div>
        )}
      />,
    );

    expect(screen.getByTestId('user-info')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Age: 30')).toBeInTheDocument();
  });

  it('should handle updated values', () => {
    const { rerender } = render(
      <Convert defaultValue="No value" formatter={(value) => `Number: ${value}`} value={5} />,
    );

    expect(screen.getByText('Number: 5')).toBeInTheDocument();

    // Update to null value
    rerender(<Convert defaultValue="No value" formatter={(value) => `Number: ${value}`} value={null} />);

    expect(screen.queryByText('Number: 5')).not.toBeInTheDocument();
    expect(screen.getByText('No value')).toBeInTheDocument();

    // Update back to a value
    rerender(<Convert defaultValue="No value" formatter={(value) => `Number: ${value}`} value={10} />);

    expect(screen.getByText('Number: 10')).toBeInTheDocument();
    expect(screen.queryByText('No value')).not.toBeInTheDocument();
  });
});
