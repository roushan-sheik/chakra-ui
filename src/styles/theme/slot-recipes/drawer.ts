import { defineSlotRecipe } from '@chakra-ui/react';

export const drawerSlotRecipe = defineSlotRecipe({
  slots: [
    'trigger',
    'backdrop',
    'positioner',
    'content',
    'title',
    'description',
    'closeTrigger',
    'header',
    'body',
    'footer',
  ],
  className: 'chakra-drawer',
  base: {
    backdrop: {
      backgroundColor: 'black/25',
      position: 'fixed',
      insetInlineStart: 0,
      top: 0,
      width: '100vw',
      height: '100dvh',
      zIndex: 'modal',
      _open: {
        animationName: 'fade-in',
        animationDuration: 'slow',
      },
      _closed: {
        animationName: 'fade-out',
        animationDuration: 'moderate',
      },
    },
    positioner: {
      display: 'flex',
      width: '100vw',
      height: '100dvh',
      position: 'fixed',
      insetInlineStart: 0,
      top: 0,
      zIndex: 'modal',
      overscrollBehaviorY: 'none',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      outline: 0,
      zIndex: 'modal',
      fontSize: '14px',
      maxHeight: '100dvh',
      color: 'inherit',
      backgroundColor: 'white',
      boxShadow: 'lg',
      _open: {
        animationDuration: '0.6s',
        animationTimingFunction: 'ease-in-smooth',
      },
      _closed: {
        animationDuration: '0.6s',
        animationTimingFunction: 'ease-in-smooth',
      },
    },
    header: {
      flex: '0 0 auto',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '24px',
      paddingBottom: '16px',
    },
    body: {
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '8px',
      paddingBottom: '8px',
      flex: '1 1 auto',
      overflow: 'auto',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '12px',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '8px',
      paddingBottom: '16px',
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
    },
    description: {
      color: 'fg.muted',
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          maxWidth: '320px',
        },
      },
      sm: {
        content: {
          maxWidth: '450px',
        },
      },
      md: {
        content: {
          maxWidth: '768px',
        },
      },
      lg: {
        content: {
          maxWidth: '1024px',
        },
      },
      xl: {
        content: {
          maxWidth: '1280px',
        },
      },
      full: {
        content: {
          maxWidth: '100vw',
          height: '100dvh',
        },
      },
    },
    placement: {
      start: {
        positioner: {
          justifyContent: 'flex-start',
        },
        content: {
          _open: {
            animationName: {
              base: 'slide-from-left-full, fade-in',
              _rtl: 'slide-from-right-full, fade-in',
            },
          },
          _closed: {
            animationName: {
              base: 'slide-to-left-full, fade-out',
              _rtl: 'slide-to-right-full, fade-out',
            },
          },
        },
      },
      end: {
        positioner: {
          justifyContent: 'flex-end',
        },
        content: {
          _open: {
            animationName: {
              base: 'slide-from-right-full, fade-in',
              _rtl: 'slide-from-left-full, fade-in',
            },
          },
          _closed: {
            animationName: {
              base: 'slide-to-right-full, fade-out',
              _rtl: 'slide-to-left-full, fade-out',
            },
          },
        },
      },
      top: {
        positioner: {
          alignItems: 'flex-start',
        },
        content: {
          maxWidth: '100%',
          _open: {
            animationName: 'slide-from-top-full, fade-in',
          },
          _closed: {
            animationName: 'slide-to-top-full, fade-out',
          },
        },
      },
      bottom: {
        positioner: {
          alignItems: 'flex-end',
        },
        content: {
          maxWidth: '100%',
          _open: {
            animationName: 'slide-from-bottom-full, fade-in',
          },
          _closed: {
            animationName: 'slide-to-bottom-full, fade-out',
          },
        },
      },
    },
    contained: {
      true: {
        positioner: {
          padding: '16px',
        },
        content: {
          borderRadius: '12px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'xs',
    placement: 'end',
  },
});
