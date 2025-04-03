'use client';
import React from 'react';
import NextImage from 'next/image';
import { Flex, Input } from '@chakra-ui/react';
import { CircleUserRound, Heart, Search } from 'lucide-react';

import { DrawerTrigger } from '@/components/ui/drawer';
import ShoppingBagButton from '@/components/layout/Header/components/ShoppingBagButton';
import { InputGroup } from '@/components/ui/InputGroup';
import Link from 'next/link';

interface HeaderContentProps {
  isScrolled?: boolean;
}

const HeaderContent = ({ isScrolled }: HeaderContentProps) => {
  return (
    <Flex as="nav" flexDirection="column" height="60px" maxHeight="60px" minHeight="60px" width="100%">
      <Flex
        alignItems="center"
        backgroundColor="black"
        boxShadow={isScrolled ? 'md' : 'none'}
        height="62px"
        justifyContent="center"
        left="0"
        paddingY="8px"
        position={isScrolled ? 'fixed' : 'relative'}
        top="0"
        width="100vw"
        zIndex={isScrolled ? 50 : 'auto'}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          marginX="auto"
          maxWidth="1280px"
          paddingX="16px"
          width="100%"
        >
          <Flex
            alignItems="center"
            justifyContent={{ base: 'center', tablet: 'flex-start' }}
            maxWidth={{
              base: '108px',
              tablet: '100%',
            }}
            paddingRight={{
              base: '12px',
              tablet: '20px',
            }}
            width={{
              base: '20%',
              tablet: '23%',
              desktop: '20%',
            }}
          >
            <Link href="/">
              <Flex display={{ base: 'block', tablet: 'none' }}>
                <NextImage
                  alt="SkinSeoul"
                  height={32}
                  src="https://skin-seoul.com/wp-content/uploads/2025/01/skin-seoul-logo.png"
                  width={32}
                />
              </Flex>

              <Flex display={{ base: 'none', tablet: 'block' }}>
                <NextImage
                  alt="SkinSeoul"
                  height={90}
                  src="https://skin-seoul.com/wp-content/uploads/2024/12/desktop-logo.png"
                  width={200}
                />
              </Flex>
            </Link>
          </Flex>

          <InputGroup
            alignItems="center"
            backgroundColor="white"
            borderRadius="4px"
            endElement={<Search color="gray" size={22} style={{ cursor: 'pointer' }} />}
            gap={3}
            height="40px"
            paddingX="15px"
            endElementProps={{
              paddingX: '15px',
            }}
            width={{
              base: '60%',
              tablet: '46%',
            }}
          >
            <Input
              border="none"
              color="neutral.90"
              fontSize="14px"
              padding={0}
              placeholder="Find your products"
              _focus={{
                outline: 'none',
              }}
              _focusVisible={{
                outline: 'none',
              }}
              _placeholder={{
                color: 'neutral.60',
              }}
            />
          </InputGroup>

          <Flex
            alignItems="center"
            color="white"
            gap={{ base: '16px', tablet: '24px' }}
            justifyContent={{ base: 'center', tablet: 'flex-end' }}
            paddingX={{
              base: 0,
              tablet: '8px',
            }}
            width={{
              base: '23%',
              tablet: '23%',
              desktop: '23%',
            }}
          >
            <Flex as="button" asChild cursor="pointer" display={{ base: 'none', tablet: 'block' }} minWidth="28px">
              <Heart size={28} strokeWidth={1} />
            </Flex>
            <DrawerTrigger>
              <ShoppingBagButton />
            </DrawerTrigger>
            <Flex as="button" asChild cursor="pointer" display={{ base: 'none', tablet: 'block' }} minWidth="28px">
              <CircleUserRound color="white" size={28} strokeWidth={1} />
            </Flex>
            <Flex as="button" asChild cursor="pointer">
              <NextImage
                alt="Flag"
                height={24}
                src="https://skin-seoul.com/wp-content/themes/hello-elementor-child/imgs/country-flags/SGD.jpg"
                style={{ borderRadius: '50%' }}
                width={24}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderContent;
