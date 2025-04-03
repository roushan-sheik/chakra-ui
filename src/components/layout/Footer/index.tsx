import type { ReactNode } from 'react';
import React from 'react';
import Image from 'next/image';
import { Box, Flex, Container, Heading, Text, Stack, HStack, Icon, Separator } from '@chakra-ui/react';
import { ChevronRight, MapPin } from 'lucide-react';

import PaymentMethods from '@/components/layout/Footer/PaymentMethods';

import FooterFacebookIcon from '@/components/layout/Footer/assets/FooterFacebookIcon';
import FooterInstagramIcon from '@/components/layout/Footer/assets/FooterInstagramIcon';
import FooterLinkedinIcon from '@/components/layout/Footer/assets/FooterLinkedinIcon';
import FooterTiktokIcon from '@/components/layout/Footer/assets/FooterTiktokIcon';
import Link from 'next/link';

const followUsLinks = [
  {
    icon: <FooterFacebookIcon />,
    link: 'https://web.facebook.com/people/SkinSeoul/61559740437177/',
  },
  {
    icon: <FooterInstagramIcon />,
    link: 'https://www.instagram.com/skinseoul.official/',
  },
  {
    icon: <FooterTiktokIcon />,
    link: 'https://www.tiktok.com/@skinseoul?_t=8nNaKfAVmmW&_r=1',
  },
  {
    icon: <FooterLinkedinIcon />,
    link: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGM04AKIJs9_wAAAZBTB_2YfWR2_bzMd8jhFeJFt53ZX3L-xRXTE7waw3JJAt_RU1KFsv-CS7d1eUkw8lcFVDsRFsTRbO28qN9HgdOwGc67ef-R8-u6Qg-1Zys65Oyg-s15bVw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fskinseoul',
  },
];

const Footer = () => {
  return (
    <Flex
      alignItems="center"
      as="footer"
      backgroundColor="black"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      <Box as="div" mx="auto" width="100vw">
        <Flex flexDirection="column" maxWidth="1550px" mx="auto">
          <Box>
            <Flex align="center" justify="center" paddingBottom="30px" paddingTop="90px">
              <PaymentMethods />
            </Flex>
          </Box>
          <Separator borderColor="neutral.80" orientation="horizontal" width="100%" />
          <Container maxWidth="1280px" mx="auto" paddingX={6} width="100%">
            <Flex direction={{ base: 'column', tablet: 'row' }} gap={10} paddingY={{ base: 8, tablet: 12 }}>
              <Box color="white" flexBasis={{ tablet: '40%' }} gap={3}>
                <Image
                  alt="SkinSeoul Footer Logo"
                  height={100}
                  src="https://skin-seoul.com/wp-content/uploads/2024/12/desktop-logo.png"
                  width={220}
                />
                <Text marginTop={4} textStyle="body3">
                  Explore the best in Korean skincare with our extensive range of 500+ top-brand products. From
                  hydrating toners to powerful serums, our unbeatable prices and latest collections cater to all your
                  skincare needs. Elevate your routine with SkinSeoul and discover the transformative power of K-beauty
                  today!
                </Text>

                <HStack alignItems="center" display="flex" gap={4} marginTop={8}>
                  <Heading as="h4" color="white" textStyle="body2">
                    Follow Us:
                  </Heading>
                  {followUsLinks.map((link) => (
                    <Icon
                      _hover={{ transform: 'scale(0.94)' }}
                      as="a"
                      border="1px solid"
                      borderColor="white"
                      borderRadius="full"
                      color="white"
                      cursor="pointer"
                      height="30px"
                      href={link.link}
                      key={link.link}
                      padding="6px"
                      transition="all 0.2s"
                      width="30px"
                    >
                      {link.icon}
                    </Icon>
                  ))}
                </HStack>
              </Box>

              <Flex color="white" flexBasis={{ tablet: '30%' }} flexDirection="column">
                <Heading as="h4" marginBottom={3} textStyle="body2" textTransform="uppercase">
                  Support
                </Heading>
                <Stack gap={3}>
                  <Link href="/shipping">
                    <ArrowNavItem>Shipping</ArrowNavItem>
                  </Link>

                  <Link href="/return-refund-exchange-policy">
                    <ArrowNavItem>Return, Refund &amp; Exchange Policy</ArrowNavItem>
                  </Link>
                  <Link href="/contact-us">
                    <ArrowNavItem>Contact Us</ArrowNavItem>
                  </Link>
                </Stack>
              </Flex>

              <Flex color="white" flexBasis={{ tablet: '30%' }} flexDirection="column" gap={2}>
                <Heading as="h4" marginBottom={3} textStyle="body2" textTransform="uppercase">
                  Get to Know Us
                </Heading>
                <Stack gap={7}>
                  <Link href="/about-us">
                    <ArrowNavItem>About Us</ArrowNavItem>
                  </Link>
                  <HStack alignItems="flex-start" gap={3} textStyle="body3" transition="all 0.2s">
                    <Icon>
                      <MapPin />
                    </Icon>
                    <Text>7 Temasek Boulevard Suntec Tower One Singapore (038987)</Text>
                  </HStack>
                </Stack>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Box>
      {/* privacy policy  */}
      <Box backgroundColor="#101010" width="100vw">
        <Box as="div" color="white" height="88px" maxWidth="1550px" mx="auto" paddingX={4}>
          <Flex
            alignItems="center"
            direction={{ base: 'column', tablet: 'row' }}
            height="100%"
            justifyContent={{ base: 'center', tablet: 'space-between' }}
          >
            <Text textStyle="body3">©Copyright {new Date().getFullYear()} SkinSeoul</Text>
            <Flex alignItems="center" gap={2} textStyle="body3" transition="color 0.2s">
              <Text _hover={{ color: 'neutral.40' }} asChild textStyle="body3">
                <Link href="/">Terms and conditions</Link>
              </Text>
              /
              <Text _hover={{ color: 'neutral.40' }} asChild textStyle="body3" transition="color 0.2s">
                <Link href="/">Privacy Policy</Link>
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const ArrowNavItem = ({ children }: { children: ReactNode }) => {
  return (
    <HStack
      _hover={{ color: 'neutral.40' }}
      alignItems="center"
      cursor="pointer"
      textStyle="body3"
      transition="all 0.2s"
    >
      <Icon boxSize="20px">
        <ChevronRight />
      </Icon>
      <Text>{children}</Text>
    </HStack>
  );
};

export default Footer;
