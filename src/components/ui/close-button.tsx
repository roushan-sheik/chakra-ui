import type { ButtonProps } from '@chakra-ui/react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import * as React from 'react';
import { X } from 'lucide-react';

export type CloseButtonProps = ButtonProps;

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton aria-label="Close" ref={ref} variant="ghost" {...props}>
      {props.children ?? <X />}
    </ChakraIconButton>
  );
});
