'use client';
import type { ReactNode } from 'react';
import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/styles/theme';

type SSDesignSystemProvider = {
  children: ReactNode;
};

export const SSDesignSystemProvider = ({ children }: SSDesignSystemProvider) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
