import { defineRecipe } from '@chakra-ui/react';

export const badgeRecipe = defineRecipe({
  className: 'chakra-badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '8px',
    gap: '4px',
    fontWeight: '500', // "medium" = 500
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
    userSelect: 'none',
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
        fontSize: '10px', // '2xs'
        paddingX: '4px',
        minHeight: '16px',
      },
      sm: {
        fontSize: '12px', // 'xs'
        paddingX: '6px',
        minHeight: '20px',
      },
      md: {
        fontSize: '14px', // 'sm'
        paddingX: '8px',
        minHeight: '24px',
      },
      lg: {
        fontSize: '14px', // 'sm'
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
