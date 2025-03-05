import { defineRecipe } from '@chakra-ui/react';

export const checkmarkRecipe = defineRecipe({
  className: 'chakra-checkmark',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    color: 'white',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderRadius: '4px',
    focusVisibleRing: 'outside',
    _icon: {
      boxSize: '100%',
    },
    _invalid: {
      colorPalette: 'red',
      borderColor: 'border.error',
    },
    _disabled: {
      opacity: '0.5',
    },
  },
  variants: {
    size: {
      xs: {
        boxSize: '12px',
      },
      sm: {
        boxSize: '16px',
      },
      md: {
        boxSize: '20px',
        padding: '2px',
      },
      lg: {
        boxSize: '24px',
        padding: '2px',
      },
    },
    variant: {
      solid: {
        borderColor: 'border',
        '&:is([data-state=checked], [data-state=indeterminate])': {
          background: 'colorPalette.solid',
          color: 'colorPalette.contrast',
          borderColor: 'colorPalette.solid',
        },
      },
      outline: {
        borderColor: 'border',
        '&:is([data-state=checked], [data-state=indeterminate])': {
          color: 'colorPalette.fg',
          borderColor: 'colorPalette.solid',
        },
      },
      subtle: {
        background: 'colorPalette.muted',
        borderColor: 'colorPalette.muted',
        '&:is([data-state=checked], [data-state=indeterminate])': {
          color: 'colorPalette.fg',
        },
      },
      plain: {
        '&:is([data-state=checked], [data-state=indeterminate])': {
          color: 'colorPalette.fg',
        },
      },
      inverted: {
        borderColor: 'border',
        color: 'colorPalette.fg',
        '&:is([data-state=checked], [data-state=indeterminate])': {
          borderColor: 'colorPalette.solid',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
