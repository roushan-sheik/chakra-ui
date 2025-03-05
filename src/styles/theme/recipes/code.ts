import { defineRecipe } from '@chakra-ui/react';

export const codeRecipe = defineRecipe({
  className: 'chakra-code',
  base: {
    fontFamily: 'mono',
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: '8px',
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      subtle: {
        background: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      },
      outline: {
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      surface: {
        background: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      xs: {
        fontSize: '10px',
        paddingX: '4px',
        minHeight: '16px',
      },
      sm: {
        fontSize: '12px',
        paddingX: '6px',
        minHeight: '20px',
      },
      md: {
        fontSize: '14px',
        paddingX: '8px',
        minHeight: '24px',
      },
      lg: {
        fontSize: '14px',
        paddingX: '10px',
        minHeight: '28px',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'sm',
  },
});
