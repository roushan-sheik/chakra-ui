import { defineSlotRecipe } from '@chakra-ui/react';

export const checkboxSlotRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'control', 'indicator', 'group'],
  className: 'chakra-checkbox',
  base: {
    root: {
      display: 'inline-flex',
      gap: '8px',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
    },
    control: {
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
    label: {
      fontWeight: '500',
      userSelect: 'none',
      _disabled: {
        opacity: '0.5',
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          gap: '6px',
        },
        label: {
          fontSize: '12px',
        },
        control: {
          width: '12px',
          height: '12px',
        },
      },
      sm: {
        root: {
          gap: '8px',
        },
        label: {
          fontSize: '14px',
        },
        control: {
          width: '16px',
          height: '16px',
        },
      },
      md: {
        root: {
          gap: '10px',
        },
        label: {
          fontSize: '14px',
        },
        control: {
          width: '20px',
          height: '20px',
          padding: '2px',
        },
      },
      lg: {
        root: {
          gap: '12px',
        },
        label: {
          fontSize: '16px',
        },
        control: {
          width: '24px',
          height: '24px',
          padding: '2px',
        },
      },
    },
    variant: {
      outline: {
        control: {
          borderColor: 'border',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            color: 'colorPalette.fg',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      solid: {
        control: {
          borderColor: 'border',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            background: 'colorPalette.solid',
            color: 'colorPalette.contrast',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      subtle: {
        control: {
          background: 'colorPalette.muted',
          borderColor: 'colorPalette.muted',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            color: 'colorPalette.fg',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
