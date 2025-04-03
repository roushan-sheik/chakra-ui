import type { ComponentProps, ReactNode } from 'react';
import React from 'react';
import { Flex } from '@chakra-ui/react';

type SectionContainerProps = {
  children: ReactNode;
  containerWrapperProps?: ComponentProps<typeof Flex>;
  containerInnerProps?: ComponentProps<typeof Flex>;
};

const SectionContainer = ({ children, containerInnerProps, containerWrapperProps }: SectionContainerProps) => {
  return (
    <Flex alignItems="center" justifyContent="center" maxWidth="100vw" width="100%" {...containerWrapperProps}>
      <Flex flexDirection="column" marginX="auto" maxWidth="1260px" paddingX={5} width="100%" {...containerInnerProps}>
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
