import React from 'react';
import NextImage from 'next/image';
import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import SectionContainer from '@/containers/about-us/components/SectionContainer';

const SkinSeoulStorySection = () => {
  return (
    <SectionContainer
      containerWrapperProps={{
        background: '#F6F7FB',
        paddingY: { base: 1, tablet: 3, '2xl': 4 },
      }}
    >
      <Flex flexDirection="column" gap={8}>
        <Heading as="h1" color="neutral.400" fontWeight="bold" textStyle={{ base: 'title2', tablet: 'display3' }}>
          The SkinSeoul Story
        </Heading>
        <Flex direction={{ base: 'column', tablet: 'row' }} gap={16}>
          <Flex flexBasis="50%" position="relative" width="100%">
            <Flex height={{ base: '550px', tablet: '450px', '2xl': '500px' }} width={{ base: '100%', tablet: '100%' }}>
              <Image asChild borderRadius="16px" h="full" width="full">
                <NextImage
                  alt="SkinSeoul Story"
                  height={400}
                  src="https://skin-seoul.com/wp-content/uploads/2024/09/seoul-cityscape-twilight-south-korea-scaled-1-1024x1024.webp"
                  width={650}
                />
              </Image>
            </Flex>
          </Flex>
          <Flex direction="column" flexBasis="50%" gap={4}>
            <Heading
              as="h3"
              marginBottom={{ base: 8, '2xl': 10 }}
              textStyle={{
                base: 'title1_medium',
                tablet: 'title1_medium',
              }}
            >
              <Text as="span" fontWeight="bold">
                South Korea:
              </Text>
              The Skincare Capital of the World
            </Heading>
            <Text color="neutral.80" fontWeight="regular" textStyle="body2">
              The innovation in the Korean skincare industry is unmatched, which has made Koreans some of the
              best-informed skincare consumers in the world.
            </Text>
            <Text color="neutral.80" fontWeight="regular" textStyle="body2">
              Within Korea, there are more than 100,000 Korean skincare products available for purchase. However, only
              15% of these products are readily available to purchase outside of Korea. There is a world of skincare
              products that are loved by locals, yet unknown outside of Korea due to language barriers and limited
              marketing.
            </Text>
            <Text color="neutral.80" fontWeight="regular" textStyle="body2">
              At SkinSeoul, our team is motivated to provide you with the most authentic Korean skincare experience. We
              want to empower our customers to achieve glowing, healthy skin by honing in on the trusted insights of
              Korean consumers and offering the greatest variety of Korean skincare.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default SkinSeoulStorySection;
