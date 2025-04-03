import React from 'react';

import { Heading, VStack, Text } from '@chakra-ui/react';
import SectionContainer from '@/containers/about-us/components/SectionContainer';
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/components/ui/accordion';
import categories from '@/containers/about-us/constants/categories';
import Link from 'next/link';

const ExploreProductsSection = () => {
  return (
    <SectionContainer
      containerInnerProps={{
        flexDirection: { base: 'column-reverse', tablet: 'row' },
        gap: 2,
      }}
    >
      <VStack align="start" flex="3" width="100%">
        <Heading as="h3" color="neutral.400" fontWeight="bold" marginBottom={4} textStyle="body1">
          Explore our Products
        </Heading>

        <AccordionRoot display="flex" flexDirection="column" gap={4} multiple>
          {categories.map((category) => (
            <AccordionItem key={category.id} value={category.category}>
              <AccordionItemTrigger backgroundColor="#FBF8FF" borderRadius="4px" cursor="pointer" padding={4}>
                <Text color="brand.90" fontWeight="regular" textStyle="body3">
                  {category.category}
                </Text>
              </AccordionItemTrigger>
              <AccordionItemContent
                backgroundColor="#FBF8FF"
                display="flex"
                flexDirection="column"
                gap={3}
                paddingBottom="24px"
                paddingX="24px"
              >
                {category.subCategories.map((subCategory) => (
                  <Link href={subCategory.link} key={subCategory.name}>
                    <Text _hover={{ color: 'neutral.50' }} color="neutral.80" fontWeight="regular" textStyle="body3">
                      {subCategory.name}
                    </Text>
                  </Link>
                ))}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </VStack>
    </SectionContainer>
  );
};

export default ExploreProductsSection;
