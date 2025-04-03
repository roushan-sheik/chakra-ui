'use client';
import React, { useState } from 'react';
import { useDisclosure, VStack } from '@chakra-ui/react';

import { DrawerRoot } from '@/components/ui/drawer';
import ShoppingBagDrawer from '@/components/layout/Header/ShoppingBagDrawer';
import { useEventListener } from '@/utils/hook/useEventListener';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import FreeShippingBanner from './FreeShippingBanner';
import HeaderContent from './HeaderContent';

export const FREE_SHIPPING_BANNER_HEIGHT = 36;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const disclosure = useDisclosure();
  const { open, onClose, setOpen } = disclosure;

  useEventListener('scroll', () => {
    if (window.scrollY > FREE_SHIPPING_BANNER_HEIGHT) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <DrawerRoot onOpenChange={(e) => setOpen(e.open)} open={open} size="sm">
      <ShoppingBagDrawer onClose={onClose} />
      <VStack backgroundColor="black" flexDirection="column" position="relative" width="100vw">
        <FreeShippingBanner />
        <HeaderContent isScrolled={isScrolled} />
        <HeaderMenu />
      </VStack>
    </DrawerRoot>
  );
};

export default Header;
