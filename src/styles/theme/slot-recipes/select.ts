import { defineSlotRecipe } from '@chakra-ui/react';

export const selectSlotRecipe = defineSlotRecipe({
  className: 'chakra-select',
  slots: [
    'label',
    'positioner',
    'trigger',
    'indicator',
    'clearTrigger',
    'item',
    'itemText',
    'itemIndicator',
    'itemGroup',
    'itemGroupLabel',
    'list',
    'content',
    'root',
    'control',
    'valueText',
    'indicatorGroup',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      minHeight: 'var(--select-trigger-height)',
      paddingX: 'var(--select-trigger-padding-x)',
      borderRadius: '8px',
      userSelect: 'none',
      textAlign: 'start',
      focusVisibleRing: 'inside',
      _placeholderShown: {
        color: 'fg.muted/80',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
      _invalid: {
        borderColor: 'border.error',
      },
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      position: 'absolute',
      right: '0',
      top: '0',
      bottom: '0',
      paddingX: 'var(--select-trigger-padding-x)',
      pointerEvents: 'none',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: {
        base: 'fg.muted',
        _disabled: 'fg.subtle',
        _invalid: 'fg.error',
      },
    },
    content: {
      background: 'bg.panel',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 'dropdown',
      borderRadius: '8px',
      outline: 0,
      maxHeight: '96px',
      overflowY: 'auto',
      boxShadow: 'md',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'fastest',
      },
    },
    item: {
      position: 'relative',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      justifyContent: 'space-between',
      flex: '1',
      textAlign: 'start',
      borderRadius: '4px',
      _highlighted: {
        background: 'bg.emphasized/60',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
      _icon: {
        width: '16px',
        height: '16px',
      },
    },
    control: {
      position: 'relative',
    },
    itemText: {
      flex: '1',
    },
    itemGroup: {
      _first: {
        marginTop: '0',
      },
    },
    itemGroupLabel: {
      paddingY: '4px',
      fontWeight: '500',
    },
    label: {
      fontWeight: '500',
      userSelect: 'none',
      fontSize: '14px',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    valueText: {
      display: '-webkit-box',
      WebkitLineClamp: '1',
      maxWidth: '80%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          background: 'transparent',
          borderWidth: '1px',
          borderColor: 'border',
          _expanded: {
            borderColor: 'border.emphasized',
          },
        },
      },
      subtle: {
        trigger: {
          borderWidth: '1px',
          borderColor: 'transparent',
          background: 'bg.muted',
        },
      },
    },
    size: {
      xs: {
        root: {
          '--select-trigger-height': '32px',
          '--select-trigger-padding-x': '8px',
        },
        content: {
          padding: '4px',
          gap: '4px',
          fontSize: '12px',
        },
        trigger: {
          fontSize: '12px',
          gap: '4px',
        },
        item: {
          paddingY: '4px',
          paddingX: '8px',
        },
        itemGroupLabel: {
          paddingY: '4px',
          paddingX: '8px',
        },
        indicator: {
          _icon: {
            width: '14px',
            height: '14px',
          },
        },
      },
      sm: {
        root: {
          '--select-trigger-height': '36px',
          '--select-trigger-padding-x': '10px',
        },
        content: {
          padding: '4px',
          fontSize: '14px',
        },
        trigger: {
          fontSize: '14px',
          gap: '4px',
        },
        indicator: {
          _icon: {
            width: '16px',
            height: '16px',
          },
        },
        item: {
          paddingY: '4px',
          paddingX: '6px',
        },
        itemGroup: {
          marginTop: '4px',
        },
        itemGroupLabel: {
          paddingY: '4px',
          paddingX: '6px',
        },
      },
      md: {
        root: {
          '--select-trigger-height': '40px',
          '--select-trigger-padding-x': '12px',
        },
        content: {
          padding: '4px',
          fontSize: '14px',
        },
        itemGroup: {
          marginTop: '6px',
        },
        item: {
          paddingY: '6px',
          paddingX: '8px',
        },
        itemIndicator: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        itemGroupLabel: {
          paddingY: '6px',
          paddingX: '8px',
        },
        trigger: {
          fontSize: '14px',
          gap: '8px',
        },
        indicator: {
          _icon: {
            width: '16px',
            height: '16px',
          },
        },
      },
      lg: {
        root: {
          '--select-trigger-height': '48px',
          '--select-trigger-padding-x': '16px',
        },
        content: {
          padding: '6px',
          fontSize: '16px',
        },
        itemGroup: {
          marginTop: '8px',
        },
        item: {
          paddingY: '8px',
          paddingX: '12px',
        },
        itemGroupLabel: {
          paddingY: '8px',
          paddingX: '12px',
        },
        trigger: {
          fontSize: '16px',
          paddingY: '12px',
          gap: '8px',
        },
        indicator: {
          _icon: {
            width: '20px',
            height: '20px',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
