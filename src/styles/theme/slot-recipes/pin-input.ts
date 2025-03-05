import { defineSlotRecipe } from '@chakra-ui/react';

export const pinInputSlotRecipe = defineSlotRecipe({
  className: 'chakra-pin-input',
  slots: ['root', 'label', 'input', 'control'],
  base: {
    input: {
      width: 'var(--input-height)',
      outline: '0',
      position: 'relative',
      appearance: 'none',
      textAlign: 'center',
      borderRadius: 'l2',
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
  },
  variants: {
    size: {
      '2xs': {
        input: {
          textStyle: 'xs',
          paddingX: '2',
          '--input-height': 'sizes.7',
        },
      },
      xs: {
        input: {
          textStyle: 'xs',
          paddingX: '2',
          '--input-height': 'sizes.8',
        },
      },
      sm: {
        input: {
          textStyle: 'sm',
          paddingX: '2.5',
          '--input-height': 'sizes.9',
        },
      },
      md: {
        input: {
          textStyle: 'sm',
          paddingX: '3',
          '--input-height': 'sizes.10',
        },
      },
      lg: {
        input: {
          textStyle: 'md',
          paddingX: '4',
          '--input-height': 'sizes.11',
        },
      },
      xl: {
        input: {
          textStyle: 'md',
          paddingX: '4.5',
          '--input-height': 'sizes.12',
        },
      },
      '2xl': {
        input: {
          textStyle: 'lg',
          paddingX: '5',
          '--input-height': 'sizes.16',
        },
      },
    },
    variant: {
      outline: {
        input: {
          background: 'transparent',
          borderWidth: '1px',
          borderColor: 'border',
          focusVisibleRing: 'inside',
        },
      },
      subtle: {
        input: {
          borderWidth: '1px',
          borderColor: 'transparent',
          background: 'bg.muted',
          focusVisibleRing: 'inside',
        },
      },
      flushed: {
        input: {
          background: 'transparent',
          borderBottomWidth: '1px',
          borderBottomColor: 'border',
          borderRadius: '0',
          paddingX: '0',
          _focusVisible: {
            borderColor: 'var(--focus-color)',
            boxShadow: '0px 1px 0px 0px var(--focus-color)',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
