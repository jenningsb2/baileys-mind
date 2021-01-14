import { styled } from 'stitches.config';

export const BlockQuote = styled('blockquote', {
  mb: '$5',
  bc: '$surface3',
  pa: '$3',
  position: 'relative',
  borderLeft: '4px solid $action',
  '*': {
    fontStyle: 'italic',
  },
});
