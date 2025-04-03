import { defineTextStyles } from '@chakra-ui/react';
import type { CompositionStyles } from '@chakra-ui/react';
import { fontSizes } from '@/styles/theme/tokens/font-sizes';

const FONT_FAMILY = 'var(--plus-jakarta-sans)';

export const typographies: CompositionStyles['textStyles'] = {
  display1: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['9xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  display2: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['8xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  display3: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['7xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  title2: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['5xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  title3: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['4xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  heading1: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['3xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  heading2: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['2xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  heading3: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body1: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['lg'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body2: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes.md.value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body3: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['sm'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  caption1: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['xs'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  caption2: {
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['2xs'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
};

export const textStyles = defineTextStyles(typographies);

export type TypographyTokens = keyof typeof typographies;
