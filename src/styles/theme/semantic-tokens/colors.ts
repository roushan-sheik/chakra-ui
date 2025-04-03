import { defineSemanticTokens } from '@chakra-ui/react';

export const colors = defineSemanticTokens.colors({
  background: {
    DEFAULT: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.5}',
        _dark: '{colors.neutral.400}',
      },
    },
    muted: {
      value: {
        _light: '{colors.neutral.10}',
        _dark: '{colors.neutral.90}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.neutral.20}',
        _dark: '{colors.neutral.80}',
      },
    },
    inverted: {
      value: {
        _light: '{colors.black}',
        _dark: '{colors.white}',
      },
    },
    panel: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.neutral.400}',
      },
    },
    error: {
      value: {
        _light: '{colors.red.5}',
        _dark: '{colors.red.950}',
      },
    },
    warning: {
      value: {
        _light: '{colors.orange.5}',
        _dark: '{colors.orange.950}',
      },
    },
    success: {
      value: {
        _light: '{colors.green.5}',
        _dark: '{colors.green.950}',
      },
    },
    info: {
      value: {
        _light: '{colors.blue.5}',
        _dark: '{colors.blue.950}',
      },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        _light: '{colors.black}',
        _dark: '{colors.neutral.5}',
      },
    },
    muted: {
      value: {
        _light: '{colors.neutral.60}',
        _dark: '{colors.neutral.40}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.40}',
        _dark: '{colors.neutral.50}',
      },
    },
    inverted: {
      value: {
        _light: '{colors.neutral.5}',
        _dark: '{colors.black}',
      },
    },
    error: {
      value: {
        _light: '{colors.red.50}',
        _dark: '{colors.red.40}',
      },
    },
    warning: {
      value: {
        _light: '{colors.orange.60}',
        _dark: '{colors.orange.30}',
      },
    },
    success: {
      value: {
        _light: '{colors.green.60}',
        _dark: '{colors.green.30}',
      },
    },
    info: {
      value: {
        _light: '{colors.blue.60}',
        _dark: '{colors.blue.30}',
      },
    },
  },
  border: {
    DEFAULT: {
      value: {
        _light: '{colors.neutral.20}',
        _dark: '{colors.neutral.80}',
      },
    },
    muted: {
      value: {
        _light: '{colors.neutral.10}',
        _dark: '{colors.neutral.90}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.5}',
        _dark: '{colors.neutral.400}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.neutral.30}',
        _dark: '{colors.neutral.70}',
      },
    },
    inverted: {
      value: {
        _light: '{colors.neutral.80}',
        _dark: '{colors.neutral.20}',
      },
    },
    error: {
      value: {
        _light: '{colors.red.50}',
        _dark: '{colors.red.40}',
      },
    },
    warning: {
      value: {
        _light: '{colors.orange.50}',
        _dark: '{colors.orange.40}',
      },
    },
    success: {
      value: {
        _light: '{colors.green.50}',
        _dark: '{colors.green.40}',
      },
    },
    info: {
      value: {
        _light: '{colors.blue.50}',
        _dark: '{colors.blue.40}',
      },
    },
  },
  neutral: {
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.neutral.80}',
        _dark: '{colors.neutral.20}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.10}',
        _dark: '{colors.neutral.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.neutral.20}',
        _dark: '{colors.neutral.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.neutral.30}',
        _dark: '{colors.neutral.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.brand.90}',
        _dark: '{colors.white}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.neutral.80}',
        _dark: '{colors.neutral.20}',
      },
    },
  },
  red: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.red.70}',
        _dark: '{colors.red.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.red.10}',
        _dark: '{colors.red.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.red.20}',
        _dark: '{colors.red.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.red.30}',
        _dark: '{colors.red.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.red.60}',
        _dark: '{colors.red.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.red.60}',
        _dark: '{colors.red.60}',
      },
    },
  },
  orange: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'black',
      },
    },
    fg: {
      value: {
        _light: '{colors.orange.70}',
        _dark: '{colors.orange.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.orange.10}',
        _dark: '{colors.orange.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.orange.20}',
        _dark: '{colors.orange.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.orange.30}',
        _dark: '{colors.orange.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.orange.60}',
        _dark: '{colors.orange.50}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.orange.60}',
        _dark: '{colors.orange.50}',
      },
    },
  },
  green: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.green.70}',
        _dark: '{colors.green.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.green.10}',
        _dark: '{colors.green.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.green.20}',
        _dark: '{colors.green.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.green.30}',
        _dark: '{colors.green.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.green.60}',
        _dark: '{colors.green.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.green.60}',
        _dark: '{colors.green.60}',
      },
    },
  },
  blue: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.blue.70}',
        _dark: '{colors.blue.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.blue.10}',
        _dark: '{colors.blue.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.blue.20}',
        _dark: '{colors.blue.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.blue.30}',
        _dark: '{colors.blue.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.blue.60}',
        _dark: '{colors.blue.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.blue.60}',
        _dark: '{colors.blue.60}',
      },
    },
  },
  yellow: {
    contrast: {
      value: {
        _light: 'black',
        _dark: 'black',
      },
    },
    fg: {
      value: {
        _light: '{colors.yellow.80}',
        _dark: '{colors.yellow.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.yellow.10}',
        _dark: '{colors.yellow.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.yellow.20}',
        _dark: '{colors.yellow.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.yellow.30}',
        _dark: '{colors.yellow.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.yellow.30}',
        _dark: '{colors.yellow.30}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.yellow.30}',
        _dark: '{colors.yellow.30}',
      },
    },
  },
  teal: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.teal.70}',
        _dark: '{colors.teal.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.teal.10}',
        _dark: '{colors.teal.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.teal.20}',
        _dark: '{colors.teal.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.teal.30}',
        _dark: '{colors.teal.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.teal.60}',
        _dark: '{colors.teal.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.teal.60}',
        _dark: '{colors.teal.60}',
      },
    },
  },
  purple: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.purple.70}',
        _dark: '{colors.purple.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.purple.10}',
        _dark: '{colors.purple.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.purple.20}',
        _dark: '{colors.purple.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.purple.30}',
        _dark: '{colors.purple.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.purple.60}',
        _dark: '{colors.purple.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.purple.60}',
        _dark: '{colors.purple.60}',
      },
    },
  },
  pink: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.pink.70}',
        _dark: '{colors.pink.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.pink.10}',
        _dark: '{colors.pink.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.pink.20}',
        _dark: '{colors.pink.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.pink.30}',
        _dark: '{colors.pink.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.pink.60}',
        _dark: '{colors.pink.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.pink.60}',
        _dark: '{colors.pink.60}',
      },
    },
  },
  cyan: {
    contrast: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    fg: {
      value: {
        _light: '{colors.cyan.70}',
        _dark: '{colors.cyan.30}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.cyan.10}',
        _dark: '{colors.cyan.90}',
      },
    },
    muted: {
      value: {
        _light: '{colors.cyan.20}',
        _dark: '{colors.cyan.80}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.cyan.30}',
        _dark: '{colors.cyan.70}',
      },
    },
    solid: {
      value: {
        _light: '{colors.cyan.60}',
        _dark: '{colors.cyan.60}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.cyan.60}',
        _dark: '{colors.cyan.60}',
      },
    },
  },
});
