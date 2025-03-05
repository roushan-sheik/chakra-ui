import { defineRecipe } from '@chakra-ui/react';

export const textareaRecipe = defineRecipe({
  className: 'chakra-textarea',
  base: {
    width: '100%',
    minWidth: '0',
    outline: '0',
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    borderRadius: '8px',
    _disabled: {
      layerStyle: 'disabled',
    },
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },
  variants: {
    size: {
      xs: {
        fontSize: '12px',
        paddingX: '8px',
        paddingY: '6px',
        scrollPaddingBottom: '6px',
      },
      sm: {
        fontSize: '14px',
        paddingX: '10px',
        paddingY: '8px',
        scrollPaddingBottom: '8px',
      },
      md: {
        fontSize: '14px',
        paddingX: '12px',
        paddingY: '8px',
        scrollPaddingBottom: '8px',
      },
      lg: {
        fontSize: '16px',
        paddingX: '16px',
        paddingY: '12px',
        scrollPaddingBottom: '12px',
      },
      xl: {
        fontSize: '16px',
        paddingX: '18px',
        paddingY: '14px',
        scrollPaddingBottom: '14px',
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
