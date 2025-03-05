'use client';
import { HStack, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <HStack gap={6} wrap={'wrap'}>
      <Button size={'lg'} color={'pink.300'} bgColor={'pink.600'}>
        Chakra Ui
      </Button>
      <Button>Chakra Ui</Button>
    </HStack>
  );
}
