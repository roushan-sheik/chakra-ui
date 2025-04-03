import { defineSemanticTokens } from '@chakra-ui/react';

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light: '0px 1px 2px {colors.neutral.90/10}, 0px 0px 1px {colors.neutral.90/20}',
      _dark: '0px 1px 1px {black/64}, 0px 0px 1px inset {colors.neutral.30/20}',
    },
  },
  sm: {
    value: {
      _light: '0px 2px 4px {colors.neutral.90/10}, 0px 0px 1px {colors.neutral.90/30}',
      _dark: '0px 2px 4px {black/64}, 0px 0px 1px inset {colors.neutral.30/30}',
    },
  },
  md: {
    value: {
      _light: '0px 4px 8px {colors.neutral.90/10}, 0px 0px 1px {colors.neutral.90/30}',
      _dark: '0px 4px 8px {black/64}, 0px 0px 1px inset {colors.neutral.30/30}',
    },
  },
  lg: {
    value: {
      _light: '0px 8px 16px {colors.neutral.90/10}, 0px 0px 1px {colors.neutral.90/30}',
      _dark: '0px 8px 16px {black/64}, 0px 0px 1px inset {colors.neutral.30/30}',
    },
  },
  xl: {
    value: {
      _light: '0px 16px 24px {colors.neutral.90/10}, 0px 0px 1px {colors.neutral.90/30}',
      _dark: '0px 16px 24px {black/64}, 0px 0px 1px inset {colors.neutral.30/30}',
    },
  },
  '2xl': {
    value: {
      _light: '0px 24px 40px {colors.neutral.90/16}, 0px 0px 1px {colors.neutral.90/30}',
      _dark: '0px 24px 40px {black/64}, 0px 0px 1px inset {colors.neutral.30/30}',
    },
  },
  inner: {
    value: {
      _light: 'inset 0 2px 4px 0 {black/5}',
      _dark: 'inset 0 2px 4px 0 black',
    },
  },
  inset: {
    value: {
      _light: 'inset 0 0 0 1px {black/5}',
      _dark: 'inset 0 0 0 1px {colors.neutral.30/5}',
    },
  },
});
