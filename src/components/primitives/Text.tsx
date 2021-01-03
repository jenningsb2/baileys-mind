import { styled } from 'stitches.config';
import { colorVariants, sizeVariants, textElementReset } from './shared';

export const Text = styled('span', {
  // Reset
  ...textElementReset,
  variants: {
    ...sizeVariants,
    ...colorVariants,
  },
});
