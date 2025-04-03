'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Link, Text } from '@chakra-ui/react';

export const MenuItem = ({ children, ...rest }: { children: ReactNode } & ComponentProps<typeof Link>) => {
  return (
    <Text
      _hover={{ color: 'neutral.50' }}
      asChild
      color="neutral.80"
      fontWeight="regular"
      textStyle="body3"
      transition="color 0.3s"
    >
      <Link {...rest}>{children}</Link>
    </Text>
  );
};
