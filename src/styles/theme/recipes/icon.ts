import { defineRecipe } from '@chakra-ui/react';

export const iconRecipe = defineRecipe({
  className: 'chakra-icon',
  base: {
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: '0',
    color: 'currentcolor',
    verticalAlign: 'middle',
  },
  variants: {
    size: {
      inherit: {},
      xs: {
        boxSize: '12px',
      },
      sm: {
        boxSize: '16px',
      },
      md: {
        boxSize: '20px',
      },
      lg: {
        boxSize: '24px',
      },
      xl: {
        boxSize: '28px',
      },
      '2xl': {
        boxSize: '32px',
      },
    },
  },
  defaultVariants: {
    size: 'inherit',
  },
});
