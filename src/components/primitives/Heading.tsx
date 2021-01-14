import { styled } from 'stitches.config';
import { colorVariants, sizeVariants, textElementReset } from './shared';

export const Heading = styled('h1', {
  ...textElementReset,
  fontSize: '$6',
  fontWeight: '$bold',
  variants: {
    ...sizeVariants,
    ...colorVariants,
  },
});
