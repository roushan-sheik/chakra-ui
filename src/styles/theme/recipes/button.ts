import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  className: 'chakra-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'button',
    flexShrink: '0',
    outline: '0',
    isolation: 'isolate',
    fontWeight: '500',
    transitionProperty: 'all',
    transitionDuration: '200ms',
    focusVisibleRing: 'outside',
    backgroundColor: 'brand.90',
    background: 'brand.90',
    _disabled: {
      layerStyle: 'disabled',
    },
    _icon: {
      flexShrink: '0',
    },
  },
  variants: {
    size: {
      '2xs': {
        height: '24px',
        minWidth: '24px',
        fontSize: '12px',
        paddingX: '8px',
        gap: '4px',
        _icon: {
          width: '14px',
          height: '14px',
        },
      },
      xs: {
        height: '32px',
        minWidth: '32px',
        fontSize: '12px',
        paddingX: '10px',
        gap: '4px',
        _icon: {
          width: '16px',
          height: '16px',
        },
      },
      sm: {
        height: '36px',
        minWidth: '36px',
        paddingX: '14px',
        fontSize: '14px',
        gap: '8px',
        _icon: {
          width: '16px',
          height: '16px',
        },
      },
      md: {
        height: '40px',
        minWidth: '40px',
        fontSize: '14px',
        paddingX: '16px',
        gap: '8px',
        _icon: {
          width: '20px',
          height: '20px',
        },
      },
      lg: {
        height: '44px',
        minWidth: '44px',
        fontSize: '16px',
        paddingX: '20px',
        gap: '12px',
        _icon: {
          width: '20px',
          height: '20px',
        },
      },
      xl: {
        height: '48px',
        minWidth: '48px',
        fontSize: '16px',
        paddingX: '20px',
        gap: '10px',
        _icon: {
          width: '20px',
          height: '20px',
        },
      },
      '2xl': {
        height: '64px',
        minWidth: '64px',
        fontSize: '18px',
        paddingX: '28px',
        gap: '12px',
        _icon: {
          width: '24px',
          height: '24px',
        },
      },
    },
    color: {
      brand: {
        color: 'white',
        background: 'brand.90',
      },
    },
    variant: {
      primary: {
        background: 'colorPalette.60',
        color: 'white',
        _hover: {
          background: 'colorPalette.60',
        },
        _expanded: {
          background: 'colorPalette.70',
        },
      },
      secondary: {
        borderWidth: '1px',
        borderColor: 'colorPalette.muted',
        color: 'colorPalette.fg',
        _hover: {
          background: 'colorPalette.subtle',
        },
        _expanded: {
          background: 'colorPalette.subtle',
        },
      },
      ghost: {
        background: 'transparent',
        color: 'colorPalette.90',
        _hover: {
          background: 'neutral.10/10',
        },
        // _expanded: {
        //   background: 'colorPalette.subtle',
        // },
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});
