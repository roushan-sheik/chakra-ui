'use client';
import type { ComponentProps } from 'react';
import React from 'react';
import { Badge, Flex, HStack, Icon, IconButton, Text, VStack, Image, Button } from '@chakra-ui/react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '@/types/product';
import NextImage from 'next/image';

type ProductCardProps = {
  productInfo: Product;
} & ComponentProps<typeof Flex>;

const ProductCard = ({ productInfo, ...rest }: ProductCardProps) => {
  return (
    <Flex
      background="#FBF8FF"
      borderRadius="12px"
      flexDirection="column"
      justify="space-between"
      position="relative"
      width="253px"
      {...rest}
    >
      <Flex height="240px" justify="center" padding={4} position="relative">
        <Flex justify="space-between" left="0" position="absolute" top="0" width="100%">
          <Badge
            background="#ecfdf3"
            borderBottomRightRadius="4px"
            borderRadius="none"
            borderTopLeftRadius="4px"
            color="#027a48"
            fontWeight="medium"
            height="28px"
            paddingX="8px"
            paddingY={0}
            textStyle="body3"
          >
            New
          </Badge>
        </Flex>
        <Flex justify="space-between" position="absolute" right="15px" top="15px">
          <Icon as={Heart} color="neutral.400" height="20px" width="20px" />
        </Flex>

        <Flex height={192} position="relative" width={192}>
          <Flex height="full" position="relative" width="full">
            <Image asChild>
              <NextImage alt={`${productInfo.name} image`} height={192} src={productInfo.image} width={192} />
            </Image>
          </Flex>
        </Flex>

        <Flex bottom="8px" left="8px" position="absolute">
          <Badge
            alignItems="center"
            background="white"
            borderRadius="20px"
            gap={1.5}
            padding="5px 10px"
            width="fit-content"
          >
            <Flex alignItems="center" gap={1}>
              <Text color="neutral.400" fontWeight="regular" textStyle="caption1">
                {productInfo.rating}
              </Text>
              <Star color="#FEC84B" size={16} />
            </Flex>
            <Flex as="hr" backgroundColor="neutral.30" border="none" height="15px" width="1px" />
            <Text color="neutral.400" fontWeight="regular" textStyle="caption1">
              {productInfo.reviews}
            </Text>
          </Badge>
        </Flex>
      </Flex>
      <HStack
        align="flex-end"
        padding={4}
        width="100%"
        backgroundColor={{
          base: 'white',
          mobile: 'white',
          tablet: 'transparent',
          desktop: 'transparent',
        }}
      >
        <VStack gap={1} width="100%">
          <VStack alignItems="flex-start" gap={1} width="100%">
            <Text fontWeight="bold" textStyle="body3">
              {productInfo.brand}
            </Text>
            <Text
              color="neutral.60"
              fontWeight="regular"
              height="40px"
              lineClamp={2}
              textStyle="body3"
              wordBreak="break-all"
            >
              {productInfo.name}
            </Text>
          </VStack>

          <Flex align="center" width="100%">
            <HStack gap={2}>
              <Text color="neutral.400" fontWeight="regular" textStyle="body3">
                ${productInfo.price}
              </Text>
              <Text color="neutral.50" fontWeight="regular" textDecoration="line-through" textStyle="body3">
                ${productInfo.originalPrice}
              </Text>
            </HStack>
          </Flex>
        </VStack>
        <IconButton
          backgroundColor="brand.90"
          borderRadius="4px"
          padding="10px"
          width="fit-content"
          display={{
            base: 'none',
            mobile: 'none',
            tablet: 'flex',
            desktop: 'flex',
          }}
        >
          <Icon as={ShoppingBag} />
        </IconButton>
      </HStack>
      <Button
        backgroundColor="brand.90"
        display={{
          base: 'flex',
          mobile: 'flex',
          tablet: 'none',
          desktop: 'none',
        }}
      >
        Add to Bag
      </Button>
    </Flex>
  );
};

export default ProductCard;
