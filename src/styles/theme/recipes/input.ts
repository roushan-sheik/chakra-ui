import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  className: 'chakra-input',
  base: {
    width: '100%',
    outline: '0',
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    borderRadius: '8px',
    _disabled: {
      layerStyle: 'disabled',
    },
    height: 'var(--input-height)',
    minWidth: 'var(--input-height)',
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },
  variants: {
    size: {
      '2xs': {
        fontSize: '12px',
        paddingX: '8px',
        '--input-height': '28px',
      },
      xs: {
        fontSize: '12px',
        paddingX: '8px',
        '--input-height': '32px',
      },
      sm: {
        fontSize: '14px',
        paddingX: '10px',
        '--input-height': '36px',
      },
      md: {
        fontSize: '14px',
        paddingX: '12px',
        '--input-height': '40px',
      },
      lg: {
        fontSize: '16px',
        paddingX: '16px',
        '--input-height': '44px',
      },
      xl: {
        fontSize: '16px',
        paddingX: '18px',
        '--input-height': '48px',
      },
      '2xl': {
        fontSize: '18px',
        paddingX: '20px',
        '--input-height': '64px',
      },
    },
    variant: {
      outline: {
        background: 'transparent',
        borderWidth: '1px',
        borderColor: 'border',
        focusVisibleRing: 'inside',
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        background: 'bg.muted',
        focusVisibleRing: 'inside',
      },
      flushed: {
        background: 'transparent',
        borderBottomWidth: '1px',
        borderBottomColor: 'border',
        borderRadius: '0px',
        paddingX: '0px',
        _focusVisible: {
          borderColor: 'var(--focus-color)',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
