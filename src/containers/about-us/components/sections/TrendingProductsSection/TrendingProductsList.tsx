'use client';
import React from 'react';
import { useProductService } from '@/hooks/product/useProductService';
import { Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '@/components/products/ProductCard/ProductCard';

const TrendingProductsList = () => {
  const { useGetProduct } = useProductService();
  const { data: products } = useGetProduct();
  const slicedProducts = products.slice(0, 4);
  return (
    <Grid
      alignItems="center"
      gridGap={24}
      gridTemplateColumns="repeat(2, 1fr)"
      height="100%"
      width="100%"
      display={{
        tablet: 'none',
        base: 'grid',
      }}
    >
      {slicedProducts.map((product, index) => (
        <GridItem key={product.id}>
          <ProductCard height="fit-content" productInfo={product} width="100%" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TrendingProductsList;
