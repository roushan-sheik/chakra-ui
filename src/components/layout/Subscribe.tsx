import React from 'react';
import { Container, Flex, Heading, Text, Input, Button, InputAddon, Group, HStack } from '@chakra-ui/react';

const Subscribe = () => {
  return (
    <Flex
      alignItems="center"
      background="linear-gradient(180deg, #28085b 0%, #553891 100%)"
      color="white"
      justifyContent="center"
      paddingX={{ base: 6, tablet: 12 }}
      paddingY={{ base: 6, tablet: 8 }}
      width="100%"
      height={{
        base: '198px',
        tablet: '392px',
      }}
    >
      <Container maxWidth="1280px" width="100%">
        <Flex alignItems="center" flexDirection="column" justifyContent="center">
          <Heading
            as="h3"
            fontWeight="medium"
            marginBottom={{ base: 2, tablet: 8 }}
            textAlign="center"
            textStyle={{
              base: 'body2',
              tablet: 'heading2',
            }}
          >
            Want to stay up to date on trending Korean skincare?
          </Heading>

          <Text
            marginBottom="24px"
            textAlign="center"
            textStyle="body2"
            width={{
              base: '100%',
              tablet: '80%',
            }}
          >
            Subscribe to get notified about product reviews, monthly product rankings, and exclusive flash sales 💜
          </Text>
          <HStack
            asChild
            width={{
              base: '100%',
              tablet: 'fit-content',
            }}
          >
            <Group attached>
              <Input
                _placeholder={{ color: 'neutral.40' }}
                backgroundColor="white"
                border="none"
                borderLeftRadius="4px"
                borderRightRadius="0"
                color="black"
                placeholder="Enter email"
                width={{ base: '100%', tablet: '300px' }}
              />
              <InputAddon>
                <Button
                  _hover={{ bg: '#758bfd' }}
                  backgroundColor="black"
                  borderLeftRadius="0"
                  borderRightRadius="4px"
                  paddingX={{ base: '6px', tablet: 7 }}
                  paddingY={{ base: '10px', tablet: 3 }}
                  textStyle="body3"
                  width="126px"
                >
                  Subscribe
                </Button>
              </InputAddon>
            </Group>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Subscribe;
