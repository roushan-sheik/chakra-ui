import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { animationStyles } from './animation-styles';
import { breakpoints } from './breakpoints';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { layerStyles } from './layer-styles';
import { recipes } from './recipes';
import { semanticTokens } from './semantic-tokens';
import { slotRecipes } from './slot-recipes';

import { tokens } from './tokens';
import { textStyles } from '@/styles/theme/tokens/typographies';

const themeConfig = defineConfig({
  cssVarsRoot: ':where(:root, :host)',
  cssVarsPrefix: 'ss',
  strictTokens: false,
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles,
  },
});

export const system = createSystem(defaultConfig, themeConfig);
