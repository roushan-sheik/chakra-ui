import { defineSlotRecipe } from '@chakra-ui/react';

export const actionBarSlotRecipe = defineSlotRecipe({
  className: 'chakra-action-bar',
  slots: ['positioner', 'content', 'separator', 'selectionTrigger', 'closeTrigger'],
  base: {
    positioner: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      insetInline: '0',
      top: 'unset',
      bottom: 'calc(env(safe-area-inset-bottom) + 20px)',
    },
    content: {
      background: 'bg.panel',
      shadow: 'md',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '12px',
      paddingY: '10px',
      paddingX: '12px',
      pointerEvents: 'auto',
      translate: 'calc(-1 * var(--scrollbar-width) / 2) 0px',
      _open: {
        animationName: 'slide-from-bottom, fade-in',
        animationDuration: 'moderate',
      },
      _closed: {
        animationName: 'slide-to-bottom, fade-out',
        animationDuration: 'faster',
      },
    },
    separator: {
      width: '1px',
      height: '20px',
      background: 'border',
    },
    selectionTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      alignSelf: 'stretch',
      fontSize: '14px',
      paddingX: '16px',
      paddingY: '4px',
      borderRadius: '8px',
      borderWidth: '1px',
      borderStyle: 'dashed',
    },
  },
});
