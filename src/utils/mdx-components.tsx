import { CustomLink } from '@/components/CustomLink/CustomLink';
import { Heading } from '@/components/primitives/Heading';
import { Paragraph } from '@/components/primitives/Paragraph';
import { ListItem } from '@/components/primitives/ListItem';
import { List } from '@/components/primitives/List';
import { Hr } from '@/components/primitives/Hr';
import { BlockQuote } from '@/components/primitives/BlockQuote';
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
  p: (props) => <Paragraph css={{ mb: '$4' }} {...props} />,
  li: (props) => (
    <ListItem css={{ ':first-of-type': { pt: '$3' } }} {...props} />
  ),
  ul: (props) => (
    <List css={{ listStyle: 'disc', ml: '$6', mb: '$5' }} {...props} />
  ),
  ol: (props) => <List as='ol' css={{ ml: '$6', mb: '$5' }} {...props} />,
  hr: (props) => <Hr {...props} />,
  blockquote: (props) => <BlockQuote {...props} />,
};
