import React from 'react';
import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';

type PaymentMethod = {
  id: number;
  name: string;
  image: string;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: 'Discover',
    image: 'https://skin-seoul.com/wp-content/uploads/2024/12/discover.png',
  },
  {
    id: 2,
    name: 'MasterCard',
    image: 'https://skin-seoul.com/wp-content/uploads/2024/12/mastercard.png',
  },
  {
    id: 3,
    name: 'PayPal',
    image: 'https://skin-seoul.com/wp-content/uploads/2024/12/paypal.png',
  },
  {
    id: 4,
    name: 'Visa',
    image: 'https://skin-seoul.com/wp-content/uploads/2024/12/visa-card.png',
  },
  {
    id: 5,
    name: 'American Express',
    image: 'https://skin-seoul.com/wp-content/uploads/2024/12/american-express.png',
  },
];

const PaymentMethods = () => {
  return (
    <Flex
      alignItems="center"
      gap={{ base: '24px', tablet: '48px' }}
      justifyContent="flex-start"
      width={{ base: '400px', tablet: '500px' }}
    >
      {paymentMethods.map((method) => {
        const isPayPal = method.name === 'PayPal';
        return (
          <Box
            height="33px"
            key={method.id}
            width={{
              base: isPayPal ? '90px' : '50px',
              tablet: isPayPal ? '110px' : '60px',
            }}
          >
            <Image
              alt={method.name}
              height={20}
              src={method.image}
              style={{ width: '100%', height: '100%' }}
              width={isPayPal ? 110 : 55}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default PaymentMethods;
