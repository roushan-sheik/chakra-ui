import { defineRecipe } from '@chakra-ui/react';

export const inputAddonRecipe = defineRecipe({
  className: 'chakra-input-addon',
  base: {
    flex: '0 0 auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    alignSelf: 'stretch',
    borderRadius: '8px',
  },
  variants: {
    size: {
      '2xs': {
        fontSize: '12px',
        paddingX: '8px',
        '--input-height': '28px',
      },
      xs: {
        fontSize: '12px',
        paddingX: '8px',
        '--input-height': '32px',
      },
      sm: {
        fontSize: '14px',
        paddingX: '10px',
        '--input-height': '36px',
      },
      md: {
        fontSize: '14px',
        paddingX: '12px',
        '--input-height': '40px',
      },
      lg: {
        fontSize: '16px',
        paddingX: '16px',
        '--input-height': '44px',
      },
      xl: {
        fontSize: '16px',
        paddingX: '18px',
        '--input-height': '48px',
      },
      '2xl': {
        fontSize: '18px',
        paddingX: '20px',
        '--input-height': '64px',
      },
    },
    variant: {
      outline: {
        borderWidth: '1px',
        borderColor: 'border',
        background: 'bg.muted',
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        background: 'bg.emphasized',
      },
      flushed: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0px',
        paddingX: '0px',
        background: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
