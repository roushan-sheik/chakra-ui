import { defineRecipe } from '@chakra-ui/react';

export const markRecipe = defineRecipe({
  className: 'chakra-mark',
  base: {
    background: 'transparent',
    color: 'inherit',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      subtle: {
        background: 'colorPalette.subtle',
        color: 'inherit',
      },
      solid: {
        background: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      text: {
        fontWeight: 'medium',
      },
      plain: {},
    },
  },
});
