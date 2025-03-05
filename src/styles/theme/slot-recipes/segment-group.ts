import { defineSlotRecipe } from '@chakra-ui/react';

export const segmentGroupSlotRecipe = defineSlotRecipe({
  className: 'chakra-segment-group',
  slots: ['root', 'label', 'item', 'itemText', 'itemControl', 'indicator'],
  base: {
    root: {
      '--segment-radius': 'radii.l2',
      borderRadius: 'l2',
      display: 'inline-flex',
      boxShadow: 'inset',
      minWidth: 'max-content',
      textAlign: 'center',
      position: 'relative',
      isolation: 'isolate',
      background: 'bg.muted',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      fontSize: 'sm',
      position: 'relative',
      color: 'fg',
      borderRadius: 'var(--segment-radius)',
      _disabled: {
        opacity: '0.5',
      },
      '&:has(input:focus-visible)': {
        focusRing: 'outside',
      },
      _before: {
        content: '""',
        position: 'absolute',
        insetInlineStart: 0,
        insetBlock: '1.5',
        background: 'border',
        width: '1px',
        transition: 'opacity 0.2s',
      },
      '& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type': {
        _before: {
          opacity: '0',
        },
      },
      '&[data-state=checked][data-ssr]': {
        shadow: 'sm',
        background: 'bg',
        borderRadius: 'var(--segment-radius)',
      },
    },
    indicator: {
      shadow: 'sm',
      pos: 'absolute',
      background: {
        _light: 'bg',
        _dark: 'bg.emphasized',
      },
      width: 'var(--width)',
      height: 'var(--height)',
      top: 'var(--top)',
      left: 'var(--left)',
      zIndex: -1,
      borderRadius: 'var(--segment-radius)',
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          height: '6',
        },
        item: {
          textStyle: 'xs',
          paddingX: '3',
          gap: '1',
        },
      },
      sm: {
        root: {
          height: '8',
        },
        item: {
          textStyle: 'sm',
          paddingX: '4',
          gap: '2',
        },
      },
      md: {
        root: {
          height: '10',
        },
        item: {
          textStyle: 'sm',
          paddingX: '4',
          gap: '2',
        },
      },
      lg: {
        root: {
          height: '10',
        },
        item: {
          textStyle: 'md',
          paddingX: '5',
          gap: '3',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
