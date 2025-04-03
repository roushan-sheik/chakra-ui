import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FREE_SHIPPING_BANNER_HEIGHT } from '@/components/layout/Header/index';

const FreeShippingBanner = () => {
  return (
    <Flex
      alignItems="center"
      height={`${FREE_SHIPPING_BANNER_HEIGHT}px`}
      justifyContent="center"
      paddingTop={1.5}
      transition="all 0.3s"
      width="100%"
    >
      <Text color="white" fontSize={{ base: '12px', tablet: '14px' }} textAlign="center">
        <Text as="span" backgroundColor="#3d1690" borderRadius="4px" marginRight="4px" padding="4px">
          Free Shipping
        </Text>
        for New Customers
      </Text>
    </Flex>
  );
};

export default FreeShippingBanner;
