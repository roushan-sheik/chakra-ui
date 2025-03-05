import { defineRecipe } from '@chakra-ui/react';

export const spinnerRecipe = defineRecipe({
  className: 'chakra-spinner',
  base: {
    display: 'inline-block',
    borderColor: 'currentColor',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '50%',
    width: 'var(--spinner-size)',
    height: 'var(--spinner-size)',
    animation: 'spin',
    animationDuration: 'slowest',
    '--spinner-track-color': 'transparent',
    borderBottomColor: 'var(--spinner-track-color)',
    borderInlineStartColor: 'var(--spinner-track-color)',
  },
  variants: {
    size: {
      inherit: {
        '--spinner-size': '1em',
      },
      xs: {
        '--spinner-size': '12px',
      },
      sm: {
        '--spinner-size': '16px',
      },
      md: {
        '--spinner-size': '20px',
      },
      lg: {
        '--spinner-size': '32px',
      },
      xl: {
        '--spinner-size': '40px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
