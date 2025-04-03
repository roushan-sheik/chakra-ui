import React, { Suspense } from 'react';
import { Heading, Text, Button, Center, Flex, VStack } from '@chakra-ui/react';

import SectionContainer from '@/containers/about-us/components/SectionContainer';
import TrendingProductSwiper from '@/containers/about-us/components/sections/TrendingProductsSection/TrendingProductSwiper';
import Link from 'next/link';
import TrendingProductsList from '@/containers/about-us/components/sections/TrendingProductsSection/TrendingProductsList';

const TrendingProductsSection = () => {
  return (
    <SectionContainer
      containerInnerProps={{
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <VStack gap={8} width="100%">
        <Flex alignItems="start" flexDirection="column" gap={2} width="100%">
          <Heading as="h2" color="neutral.400" fontWeight="bold" textStyle="heading2">
            SkinSight™ Trending Products
          </Heading>
          <Text color="neutral.60" fontWeight="regular" textStyle="body2">
            We determined this week&#39;s trendiest and highest-rated products in Korea.
          </Text>
        </Flex>

        <Suspense fallback={<div>Loading...</div>}>
          <TrendingProductSwiper />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingProductsList />
        </Suspense>

        <Center marginBottom={4} marginTop={1}>
          <Link href="/trends">
            <Button _hover={{ background: 'neutral.80' }} backgroundColor="neutral.400" borderRadius="4px">
              Show More
            </Button>
          </Link>
        </Center>
      </VStack>
    </SectionContainer>
  );
};

export default TrendingProductsSection;
