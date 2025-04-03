import React from 'react';

import { isSlottable } from './@common';
// TOOD: if this hooks doesn't work well. We need to change with our own util hook.
import { mergeProps, mergeRefs } from '@chakra-ui/react';

export type SlotProps = React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>;
const Slot = React.forwardRef(({ children, ...slotProps }: SlotProps, ref: React.ForwardedRef<HTMLElement>) => {
  const childrenList = React.Children.toArray(children);
  const slottable = childrenList.find(isSlottable);

  if (slottable != null) {
    const newElement = slottable.props.children as React.ReactNode;
    const newChildren = childrenList.map((child) => {
      if (child !== slottable) {
        return child;
      }
      if (React.Children.count(newElement) > 1) {
        return React.Children.only(null);
      }
      return React.isValidElement(newElement) ? (newElement.props.children as React.ReactNode) : null;
    });

    return (
      <SlotClone {...slotProps} ref={ref}>
        {React.isValidElement(newElement) ? React.cloneElement(newElement, undefined, newChildren) : null}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={ref}>
      {children}
    </SlotClone>
  );
});

const SlotClone = React.forwardRef((props: React.PropsWithChildren, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: forwardedRef ? mergeRefs(forwardedRef, (children as any).ref) : (children as any).ref,
    });
  }

  // If we have multiple children (not in a React element wrapper), return null
  // This matches the test expectation
  return null;
});

export default Slot;
