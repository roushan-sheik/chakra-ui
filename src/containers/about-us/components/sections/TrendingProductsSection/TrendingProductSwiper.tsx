'use client';
import React from 'react';
import { Swiper } from '@/components/ui';
import ProductCard from '@/components/products/ProductCard/ProductCard';
import { HStack } from '@chakra-ui/react';
import { useProductService } from '@/hooks/product/useProductService';

const TrendingProductSwiper = () => {
  const { useGetProduct } = useProductService();
  const { data: products } = useGetProduct();
  return (
    <HStack
      alignItems="center"
      height="100%"
      width="100%"
      display={{
        base: 'none',
        tablet: 'flex',
      }}
    >
      <Swiper itemLength={products.length}>
        {products.map((product) => (
          <Swiper.Slide key={product.id}>
            <ProductCard height="358px" productInfo={product} width="100%" />
          </Swiper.Slide>
        ))}
      </Swiper>
    </HStack>
  );
};

export default TrendingProductSwiper;
