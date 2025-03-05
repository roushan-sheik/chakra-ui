import { defineRecipe } from '@chakra-ui/react';

export const colorSwatchRecipe = defineRecipe({
  className: 'color-swatch',
  base: {
    boxSize: 'var(--swatch-size)',
    shadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    '--checker-size': '8px',
    '--checker-bg': 'colors.bg',
    '--checker-fg': 'colors.bg.emphasized',
    background:
      'linear-gradient(var(--color), var(--color)), repeating-conic-gradient(var(--checker-fg) 0%, var(--checker-fg) 25%, var(--checker-bg) 0%, var(--checker-bg) 50%) 0% 50% / var(--checker-size) var(--checker-size) !important',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  variants: {
    size: {
      '2xs': {
        '--swatch-size': '14px',
      },
      xs: {
        '--swatch-size': '16px',
      },
      sm: {
        '--swatch-size': '18px',
      },
      md: {
        '--swatch-size': '20px',
      },
      lg: {
        '--swatch-size': '24px',
      },
      xl: {
        '--swatch-size': '28px',
      },
      '2xl': {
        '--swatch-size': '32px',
      },
      inherit: {
        '--swatch-size': 'inherit',
      },
      full: {
        '--swatch-size': '100%',
      },
    },
    shape: {
      square: {
        borderRadius: '0px',
      },
      circle: {
        borderRadius: '50%',
      },
      rounded: {
        borderRadius: '4px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'rounded',
  },
});
