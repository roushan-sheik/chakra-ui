import { defineSlotRecipe } from '@chakra-ui/react';

export const emptyStateSlotRecipe = defineSlotRecipe({
  slots: ['root', 'content', 'indicator', 'title', 'description'],
  className: 'chakra-empty-state',
  base: {
    root: {
      width: 'full',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg.subtle',
      _icon: {
        boxSize: '1em',
      },
    },
    title: {
      fontWeight: 'semibold',
    },
    description: {
      textStyle: 'sm',
      color: 'fg.muted',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          paddingX: '4',
          paddingY: '6',
        },
        title: {
          textStyle: 'md',
        },
        content: {
          gap: '4',
        },
        indicator: {
          textStyle: '2xl',
        },
      },
      md: {
        root: {
          paddingX: '8',
          paddingY: '12',
        },
        title: {
          textStyle: 'lg',
        },
        content: {
          gap: '6',
        },
        indicator: {
          textStyle: '4xl',
        },
      },
      lg: {
        root: {
          paddingX: '12',
          paddingY: '16',
        },
        title: {
          textStyle: 'xl',
        },
        content: {
          gap: '8',
        },
        indicator: {
          textStyle: '6xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
