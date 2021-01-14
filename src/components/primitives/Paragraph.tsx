import { styled } from 'stitches.config';
import { colorVariants, sizeVariants, textElementReset } from './shared';

export const Paragraph = styled('p', {
  ...textElementReset,
  fontSize: '$3',
  fontWeight: '$regular',
  lineHeight: '$primary',
  variants: {
    ...sizeVariants,
    ...colorVariants,
  },
});
