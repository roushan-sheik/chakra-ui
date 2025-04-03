import React from 'react';
import { Heading, Text, Grid, GridItem, VStack, Flex } from '@chakra-ui/react';
import SectionContainer from '@/containers/about-us/components/SectionContainer';

const SKIN_SEOUL_REASONS = [
  {
    question: 'The #1 Destination for Korean Skincare',
    answer:
      'We currently offer 500+ brands and 7,000+ products, with unbeatable choice for brands such as CosRX, RoundLab, Torriden, Dr.G, Skin1004, Somebymi and many more.',
  },
  {
    question: 'Product Authenticity Guarantee',
    answer:
      "Our products are shipped directly from Korea and we guarantee that you're receiving an authentic product. We stand behind the authenticity of all products that we offer.",
  },
  {
    question: 'Our SkinSight™ AI System',
    answer:
      "We built SkinSight – a proprietary AI ranking system based on millions of skincare insights, direct from South Korea. No editors, panels, or sponsorships – our analysis is based solely off of Korean consumers' voices and opinions.",
  },
  {
    question: 'Price Guarantee',
    answer:
      'Korean skincare products are revered for their high-quality formulations and reasonable pricing. We offer a lowest price guarantee, so that you can always rely on SkinSeoul for your skincare needs.',
  },
];

const WhySkinSeoulSection = () => {
  return (
    <SectionContainer
      containerInnerProps={{
        gap: 2,
      }}
    >
      <Heading as="h2" fontWeight="bold" paddingTop={{ base: 4, tablet: 0 }} textStyle="title2">
        Why SkinSeoul?
      </Heading>
      <Flex alignItems="center" justifyContent="center" width="100%">
        <Grid gap={8} templateColumns={{ base: '1fr', tablet: 'repeat(2, 1fr)' }}>
          {SKIN_SEOUL_REASONS.map(({ question, answer }, index) => {
            const showBorderLg = index === 0 || index === 1;
            const showBorderBase = index !== SKIN_SEOUL_REASONS.length - 1;

            return (
              <GridItem
                key={question}
                paddingY={{ base: 4, tablet: 8 }}
                borderBottom={{
                  base: showBorderBase ? '1px solid' : 'none',
                  tablet: showBorderLg ? '1px solid' : 'none',
                }}
                borderColor={{
                  base: showBorderBase ? 'neutral.20' : 'transparent',
                  tablet: showBorderLg ? 'neutral.20' : 'transparent',
                }}
              >
                <VStack align="start" gap={3}>
                  <Heading as="h3" fontWeight="medium" textStyle="heading2">
                    {question}
                  </Heading>
                  <Text color="neutral.70" fontWeight="regular" textStyle="body2">
                    {answer}
                  </Text>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </SectionContainer>
  );
};

export default WhySkinSeoulSection;
