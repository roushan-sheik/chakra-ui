import { defineSlotRecipe } from '@chakra-ui/react';

export const tableSlotRecipe = defineSlotRecipe({
  className: 'chakra-table',
  slots: ['root', 'header', 'body', 'row', 'columnHeader', 'cell', 'footer', 'caption'],
  base: {
    root: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
      textAlign: 'start',
      verticalAlign: 'top',
    },
    row: {
      _selected: {
        background: 'colorPalette.subtle',
      },
    },
    cell: {
      textAlign: 'start',
      alignItems: 'center',
    },
    columnHeader: {
      fontWeight: 'medium',
      textAlign: 'start',
      color: 'fg',
    },
    caption: {
      fontWeight: 'medium',
      textStyle: 'xs',
    },
    footer: {
      fontWeight: 'medium',
    },
  },
  variants: {
    interactive: {
      true: {
        body: {
          '& tr': {
            _hover: {
              background: 'colorPalette.subtle',
            },
          },
        },
      },
    },
    stickyHeader: {
      true: {
        header: {
          '& :where(tr)': {
            top: 'var(--table-sticky-offset, 0)',
            position: 'sticky',
            zIndex: 1,
          },
        },
      },
    },
    striped: {
      true: {
        row: {
          '&:nth-of-type(odd) td': {
            background: 'bg.muted',
          },
        },
      },
    },
    showColumnBorder: {
      true: {
        columnHeader: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
        cell: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
      },
    },
    variant: {
      line: {
        columnHeader: {
          borderBottomWidth: '1px',
        },
        cell: {
          borderBottomWidth: '1px',
        },
        row: {
          background: 'bg',
        },
      },
      outline: {
        root: {
          boxShadow: '0 0 0 1px {colors.border}',
          overflow: 'hidden',
        },
        columnHeader: {
          borderBottomWidth: '1px',
        },
        header: {
          background: 'bg.muted',
        },
        row: {
          '&:not(:last-of-type)': {
            borderBottomWidth: '1px',
          },
        },
        footer: {
          borderTopWidth: '1px',
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: 'sm',
        },
        columnHeader: {
          paddingX: '2',
          paddingY: '2',
        },
        cell: {
          paddingX: '2',
          paddingY: '2',
        },
      },
      md: {
        root: {
          textStyle: 'sm',
        },
        columnHeader: {
          paddingX: '3',
          paddingY: '3',
        },
        cell: {
          paddingX: '3',
          paddingY: '3',
        },
      },
      lg: {
        root: {
          textStyle: 'md',
        },
        columnHeader: {
          paddingX: '4',
          paddingY: '3',
        },
        cell: {
          paddingX: '4',
          paddingY: '3',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'line',
    size: 'md',
  },
});
