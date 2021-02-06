import { CustomLink } from '@/components/common/CustomLink/CustomLink';
import { Heading } from '@/components/common/primitives/Heading';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { ListItem } from '@/components/common/primitives/ListItem';
import { List } from '@/components/common/primitives/List';
import { Hr } from '@/components/common/primitives/Hr';
import { BlockQuote } from '@/components/common/primitives/BlockQuote';
import { MdxRemote } from 'next-mdx-remote/types';

/**
 * `components` is an object of react component elements
 * that replace native html elements compiled from the `.mdx` files
 */
export const components: MdxRemote.Components = {
  a: CustomLink,
  h1: (props) => <Heading as='h1' size='5' css={{ mb: '$5' }} {...props} />,
  h2: (props) => <Heading as='h2' size='4' css={{ mb: '$5' }} {...props} />,
  h3: (props) => <Heading as='h3' size='3' css={{ mb: '$5' }} {...props} />,
  h4: (props) => <Heading as='h4' size='3' css={{ mb: '$5' }} {...props} />,
  h5: (props) => <Heading as='h5' size='3' css={{ mb: '$5' }} {...props} />,
  h6: (props) => <Heading as='h6' size='3' css={{ mb: '$5' }} {...props} />,
  p: (props) => <Paragraph css={{ mb: '$4' }} {...props} />,
  li: (props) => (
    <ListItem
      css={{ ':first-of-type': { pt: '$3', lh: '$loose' } }}
      {...props}
    />
  ),
  ul: (props) => (
    <List
      css={{ listStyle: 'disc', ml: '$6', mb: '$5', bp1: { ml: '$5' } }}
      {...props}
    />
  ),
  ol: (props) => <List as='ol' css={{ ml: '$6', mb: '$5' }} {...props} />,
  hr: (props) => <Hr {...props} />,
  blockquote: (props) => <BlockQuote {...props} />,
};
