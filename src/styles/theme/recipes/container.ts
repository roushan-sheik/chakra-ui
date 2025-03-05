import { defineRecipe } from '@chakra-ui/react';

export const containerRecipe = defineRecipe({
  className: 'chakra-container',
  base: {
    position: 'relative',
    maxWidth: '1280px',
    width: '100%',
    marginX: 'auto',
    paddingX: {
      base: '16px',
      tablet: '24px',
      desktop: '32px',
    },
  },
  variants: {
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    fluid: {
      true: {
        maxWidth: '100%',
      },
    },
  },
});
