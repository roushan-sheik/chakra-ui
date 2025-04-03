import { Flex } from '@chakra-ui/react';
import SkinSeoulStorySection from '@/containers/about-us/components/sections/SkinSeoulStorySection';
import WhySkinSeoulSection from '@/containers/about-us/components/sections/WhySkinSeoulSection';
import OurVisionSection from '@/containers/about-us/components/sections/OurVisionSection';
import TrendingProductsSection from '@/containers/about-us/components/sections/TrendingProductsSection/TrendingProductsSection';
import ExploreProductsSection from '@/containers/about-us/components/sections/ExploreProductsSection';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { PRODUCT_QUERIES } from '@/infrastructure/product/utils/queries';

const AboutUsPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(PRODUCT_QUERIES.getProducts);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex background="#ffffffe0" direction="column" gap={20} paddingBottom="90px" width="100%">
        <SkinSeoulStorySection />
        <WhySkinSeoulSection />
        <OurVisionSection />
        <TrendingProductsSection />
        <ExploreProductsSection />
      </Flex>
    </HydrationBoundary>
  );
};

export default AboutUsPage;
