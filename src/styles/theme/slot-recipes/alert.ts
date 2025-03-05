import { defineSlotRecipe } from '@chakra-ui/react';

export const alertSlotRecipe = defineSlotRecipe({
  slots: ['title', 'description', 'root', 'indicator', 'content'],
  className: 'chakra-alert',
  base: {
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
      borderRadius: '12px',
    },
    title: {
      fontWeight: '500',
    },
    description: {
      display: 'inline',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      width: '1em',
      height: '1em',
      _icon: {
        boxSize: '100%',
      },
    },
    content: {
      display: 'flex',
      flex: '1',
      gap: '4px',
    },
  },
  variants: {
    status: {
      info: {
        root: {
          colorPalette: 'blue',
        },
      },
      warning: {
        root: {
          colorPalette: 'orange',
        },
      },
      success: {
        root: {
          colorPalette: 'green',
        },
      },
      error: {
        root: {
          colorPalette: 'red',
        },
      },
      neutral: {
        root: {
          colorPalette: 'gray',
        },
      },
    },
    inline: {
      true: {
        content: {
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
      },
      false: {
        content: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    variant: {
      subtle: {
        root: {
          background: 'colorPalette.subtle',
          color: 'colorPalette.fg',
        },
      },
      surface: {
        root: {
          background: 'colorPalette.subtle',
          color: 'colorPalette.fg',
          shadow: 'inset 0 0 0px 1px var(--shadow-color)',
          shadowColor: 'colorPalette.muted',
        },
        indicator: {
          color: 'colorPalette.fg',
        },
      },
      outline: {
        root: {
          color: 'colorPalette.fg',
          shadow: 'inset 0 0 0px 1px var(--shadow-color)',
          shadowColor: 'colorPalette.muted',
        },
        indicator: {
          color: 'colorPalette.fg',
        },
      },
      solid: {
        root: {
          background: 'colorPalette.solid',
          color: 'colorPalette.contrast',
        },
        indicator: {
          color: 'colorPalette.contrast',
        },
      },
    },
    size: {
      sm: {
        root: {
          gap: '8px',
          paddingX: '12px',
          paddingY: '12px',
          fontSize: '12px',
        },
        indicator: {
          fontSize: '20px',
        },
      },
      md: {
        root: {
          gap: '12px',
          paddingX: '16px',
          paddingY: '16px',
          fontSize: '14px',
        },
        indicator: {
          fontSize: '24px',
        },
      },
      lg: {
        root: {
          gap: '12px',
          paddingX: '16px',
          paddingY: '16px',
          fontSize: '16px',
        },
        indicator: {
          fontSize: '28px',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
    variant: 'subtle',
    size: 'md',
    inline: false,
  },
});
