import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ShoppingBag } from 'lucide-react';

const ShoppingBagButton = () => {
  return (
    <Flex cursor="pointer" position="relative">
      <ShoppingBag color="white" size={28} strokeWidth={1} />
      <Flex
        alignItems="center"
        backgroundColor="#027A48"
        borderRadius="full"
        fontSize="10px"
        height="14px"
        justifyContent="center"
        position="absolute"
        right="-4px"
        top="-4px"
        width="14px"
      >
        <Text>0</Text>
      </Flex>
    </Flex>
  );
};

export default ShoppingBagButton;
