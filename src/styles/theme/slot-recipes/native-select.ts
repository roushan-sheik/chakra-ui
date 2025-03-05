import { defineSlotRecipe } from '@chakra-ui/react';

export const nativeSelectSlotRecipe = defineSlotRecipe({
  className: 'chakra-native-select',
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      height: 'fit-content',
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    field: {
      width: '100%',
      minWidth: '0',
      outline: '0',
      appearance: 'none',
      borderRadius: '8px',
      '--error-color': 'colors.border.error',
      _disabled: {
        layerStyle: 'disabled',
      },
      _invalid: {
        focusRingColor: 'var(--error-color)',
        borderColor: 'var(--error-color)',
      },
      focusVisibleRing: 'inside',
      lineHeight: 'normal',
      '& > option, & > optgroup': {
        background: 'bg',
      },
    },
    indicator: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '100%',
      color: 'fg.muted',
      _disabled: {
        opacity: '0.5',
      },
      _invalid: {
        color: 'fg.error',
      },
      _icon: {
        width: '1em',
        height: '1em',
      },
    },
  },
  variants: {
    variant: {
      outline: {
        field: {
          background: 'transparent',
          borderWidth: '1px',
          borderColor: 'border',
          _expanded: {
            borderColor: 'border.emphasized',
          },
        },
      },
      subtle: {
        field: {
          borderWidth: '1px',
          borderColor: 'transparent',
          background: 'bg.muted',
        },
      },
      plain: {
        field: {
          background: 'transparent',
          color: 'fg',
          focusRingWidth: '2px',
        },
      },
    },
    size: {
      xs: {
        field: {
          fontSize: '12px',
          paddingLeft: '8px',
          paddingRight: '24px',
          height: '24px',
        },
        indicator: {
          fontSize: '14px',
          insetInlineEnd: '6px',
        },
      },
      sm: {
        field: {
          fontSize: '14px',
          paddingLeft: '10px',
          paddingRight: '32px',
          height: '32px',
        },
        indicator: {
          fontSize: '16px',
          insetInlineEnd: '8px',
        },
      },
      md: {
        field: {
          fontSize: '14px',
          paddingLeft: '12px',
          paddingRight: '32px',
          height: '40px',
        },
        indicator: {
          fontSize: '18px',
          insetInlineEnd: '8px',
        },
      },
      lg: {
        field: {
          fontSize: '16px',
          paddingLeft: '16px',
          paddingRight: '32px',
          height: '44px',
        },
        indicator: {
          fontSize: '20px',
          insetInlineEnd: '12px',
        },
      },
      xl: {
        field: {
          fontSize: '16px',
          paddingLeft: '18px',
          paddingRight: '40px',
          height: '48px',
        },
        indicator: {
          fontSize: '20px',
          insetInlineEnd: '12px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
