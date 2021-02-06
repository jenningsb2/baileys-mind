import Link from 'next/link';
import { Paths } from '@data/paths';
import { Box } from '@/components/common/Box/Box';
import { Heading } from '@/components/common/primitives/Heading';
import { List } from '@/components/common/primitives/List';
import { ListItem } from '@/components/common/primitives/ListItem';
import { LinkedArticle } from '@/@types/writings-data';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { styled } from 'stitches.config';
import { defaultTransition } from '@/styles/animation';

const Description = styled(Paragraph, {
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
const StyledListItem = styled(ListItem, {
  ma: '$0',
  borderTop: '1px solid $surface1',
  px: '$2',
  py: '$4',
  ':hover': {
    bc: '$action20',
  },
  transition: defaultTransition,
});

interface LinkedArticlesProps {
  links: LinkedArticle[];
}
export const LinkedArticles: React.FC<LinkedArticlesProps> = ({ links }) => {
  return (
    <Box as='aside' css={{ maxWidth: '163px' }}>
      <Heading size='3' css={{ mb: '$4' }}>
        Linked
      </Heading>
      <List>
        {links.map((link) => (
          <StyledListItem key={link.link}>
            <Link href={`/${Paths.writing}/${link.link}`} passHref>
              <a>
                <Heading as='h2' size='2' css={{ mb: '$2', lh: '$primary' }}>
                  {link.title}
                </Heading>
                <Description size='2'>{link.description}</Description>
              </a>
            </Link>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};
