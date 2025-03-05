import { defineTextStyles } from '@chakra-ui/react';
import type { CompositionStyles } from '@chakra-ui/react';
import { fontSizes } from '@/styles/theme/tokens/font-sizes';

const FONT_FAMILY = 'var(--plus-jakarta-sans)';

export const typographies: CompositionStyles['textStyles'] = {
  heading1: {
    description: 'Heading 1',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['8xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  heading2: {
    description: 'Heading 2',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['7xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  heading3: {
    description: 'Heading 3',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['5xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  title1: {
    description: 'Title 1',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['2xl'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  title2: {
    description: 'Title 2',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['xl'].value,

      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  title3: {
    description: 'Title 3',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['lg'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body1: {
    description: 'Body 1',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: '16px',

      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body2: {
    description: 'Body 2',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['sm'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
  body3: {
    description: 'Body 3',
    value: {
      fontFamily: FONT_FAMILY,
      fontSize: fontSizes['xs'].value,
      lineHeight: '1.4',
      letterSpacing: '0%',
    },
  },
};

export const textStyles = defineTextStyles(typographies);

export type TypographyTokens = keyof typeof typographies;
