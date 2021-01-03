import { styled } from 'stitches.config';
import { textElementReset } from './shared';

export const ListItem = styled('li', {
  ...textElementReset,
  fontSize: '$3',
  fontWeight: '$regular',
  mb: '$4',
  lineHeight: '$primary',
});
