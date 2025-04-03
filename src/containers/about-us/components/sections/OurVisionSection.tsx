import React from 'react';
import { Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import SectionContainer from '@/containers/about-us/components/SectionContainer';

const OurVisionSection = () => {
  return (
    <SectionContainer
      containerInnerProps={{
        flexDirection: { base: 'column-reverse', tablet: 'row' },
        gap: 2,
      }}
    >
      <VStack align="start" flex="3" width="100%">
        <VStack align="start" gap={4}>
          <Heading
            as="h2"
            color="neutral.400"
            fontWeight="bold"
            marginBottom={4}
            textStyle="title2"
            display={{
              base: 'none',
              tablet: 'flex',
            }}
          >
            Our Vision
          </Heading>

          <Text color="neutral.80" fontWeight="regular" textStyle="body2">
            Our team is passionate about building SkinSeoul because we believe in the transformative power of skincare.
            It&#39;s not just about looking good; it&#39;s about feeling confident and living a healthier, more
            fulfilling life.
          </Text>

          <Text color="neutral.80" fontWeight="regular" textStyle="body2">
            I grew up in Korea, so I&#39;ve always known the quality and innovation of the Korean skincare industry.
            However, I have struggled to find these high-quality and authentic Korean skincare products while living
            abroad. Because of this, I want to share and deliver this authentic Korean skincare experience to the rest
            of the world.
          </Text>

          <Text color="neutral.80" fontWeight="regular" textStyle="body2">
            I value your feedback and encourage you to share your thoughts and experiences. Your insights are crucial
            for us to evolve and improve SkinSeoul continually. Please don&#39;t hesitate to email me at
            kuen.park@skin-seoul.com with your feedback.
          </Text>
        </VStack>

        {/* Signature and email section */}
        <VStack align="start" gap={1} marginTop={6}>
          <Text color="neutral.400" fontWeight="regular" textStyle="body2">
            Warm regards,
          </Text>
          <Text as="span" color="neutral.400" fontWeight="bold" marginBottom={1} textStyle="heading2">
            Kuen Park
          </Text>
          <Heading as="h4" fontWeight="bold" marginBottom={2} textStyle="body2">
            CEO | SkinSeoul
          </Heading>
          <Button background="neutral.400">Send Email</Button>
        </VStack>
      </VStack>
      <Flex flex="2" flexDirection="column" gap={4} width="100%">
        <Heading
          as="h2"
          color="neutral.400"
          fontWeight="bold"
          marginBottom={4}
          textStyle="title2"
          display={{
            base: 'flex',
            tablet: 'none',
          }}
        >
          Our Vision
        </Heading>
        <Flex borderRadius="16px" overflow="hidden" width="100%">
          <Image
            alt="SkinSeoul CEO Profile Image"
            height={600}
            src="https://skin-seoul.com/wp-content/uploads/2024/09/image-22.png"
            width={400}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default OurVisionSection;
