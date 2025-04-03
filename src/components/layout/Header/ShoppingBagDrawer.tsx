'use client';
import React from 'react';
import { Flex, Text, Icon, IconButton, Separator, Button } from '@chakra-ui/react';
import { DrawerBackdrop, DrawerBody, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { X } from 'lucide-react';
import { MiniCartBag } from '@/components/layout/Header/components/CardCountBag';

type ShoppingBadDrawer = {
  onClose: () => void;
};

const ShoppingBagDrawer: React.FC<ShoppingBadDrawer> = ({ onClose }) => {
  return (
    <>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader
          alignItems="center"
          backgroundColor="#f6f7fb"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding="10px"
        >
          <IconButton
            _hover={{ backgroundColor: 'transparent' }}
            aria-label="Close cart"
            backgroundColor="transparent"
            border="none"
            cursor="pointer"
            onClick={onClose}
          >
            <Icon as={X} color="neutral.100" height="24px" width="24px" />
          </IconButton>

          <DrawerTitle fontWeight="bold" textAlign="center" textStyle="body1" width="100%">
            Shopping Cart
          </DrawerTitle>

          <Flex alignItems="center" justifyContent="center" marginLeft="auto" position="relative" width="40px">
            <MiniCartBag />
          </Flex>
        </DrawerHeader>

        <DrawerBody padding="0">
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex height="100%">12312</Flex>
            <Flex
              backgroundColor="#f6f7fb"
              flexDirection="column"
              gap={5}
              height="fit-content"
              padding="20px"
              width="100%"
            >
              <Flex
                alignItems="center"
                backgroundColor="white"
                borderColor="#a8b3ff4d"
                borderRadius="4px"
                borderWidth="2px"
                flexDirection="column"
                padding="8px"
              >
                <Text textStyle="body3">Congratulations! You are eligible for free shipping.</Text>
                <Flex
                  backgroundImage="linear-gradient(to right, #616ec8, #a8b3ff99, #a8b3ff99)"
                  borderRadius="4px"
                  height="8px"
                  marginBottom="8px"
                  marginTop="8px"
                />
              </Flex>

              <Flex flexDirection="column" gap={2}>
                <Flex flexDirection="column" gap={2}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text textStyle="body3">Subtotal</Text>
                    <Text textStyle="body3">$0</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text textStyle="body3">Delivery Fee:</Text>
                    <Text color="#5d22dd" textStyle="body3" textTransform="uppercase">
                      Free
                    </Text>
                  </Flex>
                </Flex>
                <Separator />
                <Flex alignItems="center" justifyContent="space-between">
                  <Text fontWeight="bold" textStyle="body2">
                    Order Total:
                  </Text>
                  <Text color="#5d22dd" textTransform="uppercase">
                    Free
                  </Text>
                </Flex>
              </Flex>
              <Button backgroundColor="neutral.400" borderRadius="8px" size="lg" textTransform="uppercase" width="100%">
                Check out
              </Button>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default ShoppingBagDrawer;
