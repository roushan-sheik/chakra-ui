import { defineSlotRecipe } from '@chakra-ui/react';

export const blockquoteSlotRecipe = defineSlotRecipe({
  className: 'chakra-blockquote',
  slots: ['root', 'icon', 'content', 'caption'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    caption: {
      fontSize: '14px',
      color: 'fg.muted',
    },
    icon: {
      width: '20px',
      height: '20px',
    },
  },
  variants: {
    justify: {
      start: {
        root: {
          alignItems: 'flex-start',
          textAlign: 'start',
        },
      },
      center: {
        root: {
          alignItems: 'center',
          textAlign: 'center',
        },
      },
      end: {
        root: {
          alignItems: 'flex-end',
          textAlign: 'end',
        },
      },
    },
    variant: {
      subtle: {
        root: {
          paddingX: '20px',
          borderStartWidth: '4px',
          borderStartColor: 'colorPalette.muted',
        },
        icon: {
          color: 'colorPalette.fg',
        },
      },
      solid: {
        root: {
          paddingX: '20px',
          borderStartWidth: '4px',
          borderStartColor: 'colorPalette.solid',
        },
        icon: {
          color: 'colorPalette.solid',
        },
      },
      plain: {
        root: {
          paddingX: '20px',
        },
        icon: {
          color: 'colorPalette.solid',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    justify: 'start',
  },
});
