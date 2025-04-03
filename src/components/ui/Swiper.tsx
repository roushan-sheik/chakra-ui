'use client';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SliderProps = {
  children: ReactNode;
  itemLength: number;
};

export const Swiper = ({ children, itemLength }: SliderProps) => {
  // FIXME: This is a workaround to avoid type errors with the swiper ref
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = (): void => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = (): void => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handlePaginationClick = (index: number): void => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <Flex height="100%" position="relative" width="100%">
      <Flex align="center" height="100%" justifyContent="center" width="100%">
        <Icon as={ChevronLeft} cursor="pointer" height="40px" onClick={handlePrev} width="40px" />

        <ReactSwiper
          className="ss-swipper"
          grabCursor={true}
          modules={[Autoplay, Navigation]}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={12}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 0.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 1.5,
            },
          }}
        >
          {children}
        </ReactSwiper>
        <Icon as={ChevronRight} cursor="pointer" height="40px" onClick={handleNext} width="48px" />
      </Flex>
      {/*<Flex height="20px" justify="center" width="100%">*/}
      {/*  {new Array(itemLength).slice(0, 5).map((_, index) => (*/}
      {/*    <Button*/}
      {/*      _hover={{ bg: 'black' }}*/}
      {/*      bg={activeIndex === index ? 'black' : 'neutral.40'}*/}
      {/*      borderRadius="full"*/}
      {/*      height="6px"*/}
      {/*      key={index}*/}
      {/*      onClick={() => handlePaginationClick(index)}*/}
      {/*      size="xs"*/}
      {/*      transition="all 0.2s"*/}
      {/*      width="6px"*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</Flex>*/}
    </Flex>
  );
};

Swiper.Slide = SwiperSlide;
