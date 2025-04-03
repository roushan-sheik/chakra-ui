import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Condition from './Condition';

describe('Condition component', () => {
  it('should render then content when expression is true', () => {
    render(
      <Condition
        else={<div data-testid="else-content">Else Content</div>}
        expression={true}
        then={<div data-testid="then-content">Then Content</div>}
      />,
    );

    expect(screen.getByTestId('then-content')).toBeInTheDocument();
    expect(screen.queryByTestId('else-content')).not.toBeInTheDocument();
  });

  it('should render else content when expression is false', () => {
    render(
      <Condition
        else={<div data-testid="else-content">Else Content</div>}
        expression={false}
        then={<div data-testid="then-content">Then Content</div>}
      />,
    );

    expect(screen.queryByTestId('then-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('else-content')).toBeInTheDocument();
  });

  it('should render nothing when expression is false and no else content is provided', () => {
    const { container } = render(
      <Condition expression={false} then={<div data-testid="then-content">Then Content</div>} />,
    );

    expect(screen.queryByTestId('then-content')).not.toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });

  it('should handle primitive values in then/else props', () => {
    render(
      <div data-testid="container">
        <Condition else="Else Text" expression={true} then="Then Text" />
      </div>,
    );

    expect(screen.getByTestId('container')).toHaveTextContent('Then Text');
    expect(screen.getByTestId('container')).not.toHaveTextContent('Else Text');
  });

  it('should handle expression changes', () => {
    const { rerender } = render(
      <Condition
        else={<div data-testid="else-content">Else Content</div>}
        expression={true}
        then={<div data-testid="then-content">Then Content</div>}
      />,
    );

    // Initially 'then' content should be visible
    expect(screen.getByTestId('then-content')).toBeInTheDocument();

    // Update the expression to false
    rerender(
      <Condition
        else={<div data-testid="else-content">Else Content</div>}
        expression={false}
        then={<div data-testid="then-content">Then Content</div>}
      />,
    );

    // Now 'else' content should be visible
    expect(screen.queryByTestId('then-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('else-content')).toBeInTheDocument();
  });
});
