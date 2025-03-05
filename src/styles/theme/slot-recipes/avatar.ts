import { defineSlotRecipe } from '@chakra-ui/react';

export const avatarSlotRecipe = defineSlotRecipe({
  slots: ['root', 'image', 'fallback'],
  className: 'chakra-avatar',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      position: 'relative',
      verticalAlign: 'top',
      flexShrink: '0',
      userSelect: 'none',
      width: 'var(--avatar-size)',
      height: 'var(--avatar-size)',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
      '&[data-group-item]': {
        borderWidth: '2px',
        borderColor: 'bg',
      },
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--avatar-radius)',
    },
    fallback: {
      lineHeight: '1',
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
    },
  },
  variants: {
    size: {
      full: {
        root: {
          '--avatar-size': '100%',
          '--avatar-font-size': '100%',
        },
      },
      '2xs': {
        root: {
          '--avatar-font-size': '10px',
          '--avatar-size': '24px',
        },
      },
      xs: {
        root: {
          '--avatar-font-size': '12px',
          '--avatar-size': '32px',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': '14px',
          '--avatar-size': '36px',
        },
      },
      md: {
        root: {
          '--avatar-font-size': '16px',
          '--avatar-size': '40px',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': '16px',
          '--avatar-size': '44px',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': '18px',
          '--avatar-size': '48px',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': '20px',
          '--avatar-size': '64px',
        },
      },
    },
    variant: {
      solid: {
        root: {
          background: 'colorPalette.solid',
          color: 'colorPalette.contrast',
        },
      },
      subtle: {
        root: {
          background: 'colorPalette.muted',
          color: 'colorPalette.fg',
        },
      },
      outline: {
        root: {
          color: 'colorPalette.fg',
          borderWidth: '1px',
          borderColor: 'colorPalette.muted',
        },
      },
    },
    shape: {
      square: {},
      rounded: {
        root: {
          '--avatar-radius': '8px',
        },
      },
      full: {
        root: {
          '--avatar-radius': '50%',
        },
      },
    },
    borderless: {
      true: {
        root: {
          '&[data-group-item]': {
            borderWidth: '0px',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'full',
    variant: 'subtle',
  },
});
