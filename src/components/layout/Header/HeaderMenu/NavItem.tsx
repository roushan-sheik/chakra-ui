'use client';

import { Condition } from '@/utils/react';
import { Flex, Text } from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const MotionChevronDown = motion.create(ChevronDown);

export const NavItem = ({
  isOpen,
  isMenu = false,
  children,
}: {
  isOpen?: boolean;
  children: ReactNode;
  isMenu?: boolean;
}) => {
  return (
    <Flex alignItems="center" as="li" gap="2px" justifyContent="center">
      <Text color="white" fontWeight="regular" textStyle="body3">
        {children}
      </Text>
      <Condition
        expression={isMenu}
        then={
          <MotionChevronDown
            color="white"
            size={20}
            strokeWidth={1}
            animate={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        }
      />
    </Flex>
  );
};
