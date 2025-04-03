import React from 'react';

export function Slottable({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function isSlottable(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === Slottable;
}
