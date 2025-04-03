'use client';

import React, { useState } from 'react';
import { Flex, Box, Text, VStack, Grid, GridItem, Link } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Condition from '@/utils/react/Condition';
import NextLink from 'next/link';
import { categories } from '@/components/layout/Header/constants/category';
import { brands } from '@/components/layout/Header/constants/brand';
import { chunkArray } from '@/utils/function/chunkArray';
import { NavItem } from './NavItem';
import { MenuItem } from './MenuItem';

const MotionFlex = motion.create(Flex);

enum MenuStatus {
  'CLOSED' = 'CLOSED',
  'BRAND' = 'BRAND',
  'SHOP_BY' = 'SHOP_BY',
}

function NavBar() {
  const [menuStatus, setMenuStatus] = useState<MenuStatus>(MenuStatus.CLOSED);

  return (
    <Flex
      alignItems="center"
      as="ul"
      backgroundColor="black"
      color="white"
      fontSize="16px"
      gap="28px"
      height="48px"
      justifyContent="center"
      listStyleType="none"
      onMouseLeave={() => setMenuStatus(MenuStatus.CLOSED)}
      padding="16px"
      display={{
        base: 'none',
        tablet: 'flex',
      }}
    >
      <Link as={NextLink} href="/" onMouseEnter={() => setMenuStatus(MenuStatus.CLOSED)}>
        <NavItem>Home</NavItem>
      </Link>
      <Link as={NextLink} href="/shop" onMouseEnter={() => setMenuStatus(MenuStatus.SHOP_BY)}>
        <NavItem isMenu isOpen={menuStatus === MenuStatus.SHOP_BY}>
          Shop By
        </NavItem>
      </Link>
      <Link as={NextLink} href="/brands" onMouseEnter={() => setMenuStatus(MenuStatus.BRAND)}>
        <NavItem isMenu isOpen={menuStatus === MenuStatus.BRAND}>
          Brands
        </NavItem>
      </Link>
      <Link as={NextLink} href="/trending" onMouseEnter={() => setMenuStatus(MenuStatus.CLOSED)}>
        <NavItem>Trending</NavItem>
      </Link>
      <Link as={NextLink} href="/some" onMouseEnter={() => setMenuStatus(MenuStatus.CLOSED)}>
        <NavItem>Why SkinSeoul?</NavItem>
      </Link>
      <AnimatePresence>
        <Condition
          expression={menuStatus !== MenuStatus.CLOSED}
          then={
            <MotionFlex
              alignItems="flex-start"
              animate={{ opacity: 1 }}
              backgroundColor="white"
              borderBottom="1px solid"
              borderBottomColor="neutral.30"
              exit={{ opacity: 0 }}
              flexDirection="row"
              height="fit-content"
              initial={{ opacity: 0 }}
              justifyContent="flex-start"
              key="shopByMenu"
              left="0"
              maxHeight="fit-content"
              minHeight="200px"
              onMouseLeave={() => setMenuStatus(MenuStatus.CLOSED)}
              paddingX="36px"
              paddingY="24px"
              position="absolute"
              top="100%"
              transition={{ duration: 0.1 }}
              width="100vw"
              zIndex="banner"
            >
              <Condition
                expression={menuStatus === MenuStatus.BRAND}
                then={
                  <Grid gap={6} templateColumns="repeat(3, 1fr)" width="100%">
                    {chunkArray(brands, brands.length / 3).map((brand, index) => (
                      <GridItem
                        _last={{ borderRight: 'none' }}
                        borderRight="1px solid"
                        borderRightColor="neutral.20"
                        colSpan={1}
                        key={index}
                        paddingLeft="30px"
                        paddingY="10px"
                        width="100%"
                      >
                        {brand.map((bName) => (
                          <Box key={bName.name} paddingBottom="8px">
                            <MenuItem href={bName.link}>{bName.name}</MenuItem>
                          </Box>
                        ))}
                      </GridItem>
                    ))}
                  </Grid>
                }
              />

              <Condition
                expression={menuStatus === MenuStatus.SHOP_BY}
                then={
                  <Grid gap={6} paddingY="10px" templateColumns="repeat(4, 1fr)" width="100%">
                    {categories.map((category) => (
                      <GridItem
                        _last={{ borderRight: 'none' }}
                        borderRight="1px solid"
                        borderRightColor="neutral.20"
                        display="flex"
                        flexDirection="column"
                        gap={3}
                        key={category.id}
                        paddingRight="30px"
                      >
                        <Link href={category.link}>
                          <Text color="neutral.90" fontWeight="bold" textStyle="body3">
                            {category.category}
                          </Text>
                        </Link>
                        <VStack alignItems="flex-start" display="flex" gap={2.5} justifyContent="flex-start">
                          {category.subCategories.map((subCat) => (
                            <MenuItem href={subCat.link} key={subCat.name}>
                              {subCat.name}
                            </MenuItem>
                          ))}
                        </VStack>
                      </GridItem>
                    ))}
                  </Grid>
                }
              />
            </MotionFlex>
          }
        />
      </AnimatePresence>
    </Flex>
  );
}

export default NavBar;
