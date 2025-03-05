import { defineSlotRecipe } from '@chakra-ui/react';

export const accordionSlotRecipe = defineSlotRecipe({
  className: 'chakra-accordion',
  slots: ['root', 'item', 'itemTrigger', 'itemContent', 'itemIndicator', 'itemBody'],
  base: {
    root: {
      width: '100%',
      '--accordion-radius': '8px',
    },
    item: {
      overflowAnchor: 'none',
    },
    itemTrigger: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      outline: '0',
      gap: '12px',
      fontWeight: '500',
      borderRadius: 'var(--accordion-radius)',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'colorPalette.focusRing',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemBody: {
      paddingTop: 'var(--accordion-padding-y)',
      paddingBottom: 'calc(var(--accordion-padding-y) * 2)',
    },
    itemContent: {
      overflow: 'hidden',
      borderRadius: 'var(--accordion-radius)',
      _open: {
        animationName: 'expand-height, fade-in',
        animationDuration: 'moderate',
      },
      _closed: {
        animationName: 'collapse-height, fade-out',
        animationDuration: 'moderate',
      },
    },
    itemIndicator: {
      transition: 'rotate 0.2s',
      transformOrigin: 'center',
      color: 'fg.subtle',
      _open: {
        rotate: '180deg',
      },
      _icon: {
        width: '1.2em',
        height: '1.2em',
      },
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: '1px',
        },
      },
      subtle: {
        itemTrigger: {
          paddingX: 'var(--accordion-padding-x)',
        },
        itemContent: {
          paddingX: 'var(--accordion-padding-x)',
        },
        item: {
          borderRadius: 'var(--accordion-radius)',
          _open: {
            background: 'colorPalette.subtle',
          },
        },
      },
      enclosed: {
        root: {
          borderWidth: '1px',
          borderRadius: 'var(--accordion-radius)',
          divideY: '1px',
          overflow: 'hidden',
        },
        itemTrigger: {
          paddingX: 'var(--accordion-padding-x)',
        },
        itemContent: {
          paddingX: 'var(--accordion-padding-x)',
        },
        item: {
          _open: {
            background: 'bg.subtle',
          },
        },
      },
      plain: {},
    },
    size: {
      sm: {
        root: {
          '--accordion-padding-x': '12px',
          '--accordion-padding-y': '8px',
        },
        itemTrigger: {
          fontSize: '14px',
          paddingY: 'var(--accordion-padding-y)',
        },
      },
      md: {
        root: {
          '--accordion-padding-x': '16px',
          '--accordion-padding-y': '8px',
        },
        itemTrigger: {
          fontSize: '16px',
          paddingY: 'var(--accordion-padding-y)',
        },
      },
      lg: {
        root: {
          '--accordion-padding-x': '18px',
          '--accordion-padding-y': '10px',
        },
        itemTrigger: {
          fontSize: '18px',
          paddingY: 'var(--accordion-padding-y)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
