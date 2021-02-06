import { List } from '@/components/common/primitives/List';
import { ListItem } from '@/components/common/primitives/ListItem';
import { Box } from '@/components/common/Box/Box';
import { Heading } from '@/components/common/primitives/Heading';
import { Paragraph } from '@/components/common/primitives/Paragraph';

import { styled } from 'stitches.config';

const milestones = [
  {
    date: 'XXXX',
    title: 'WHAT',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    date: 'XXXX',
    title: 'WHAT',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    date: 'XXXX',
    title: 'WHAT',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
];

const StyledListItem = styled(ListItem, {
  mb: '$0',
  py: '$5',
  borderBottom: '1px solid $surface1',
  ':first-of-type': {
    borderTop: '1px solid $surface1',
  },
  display: 'grid',
  gridTemplateColumns: '144px 1fr',
  g: '$5',
  bp1: {
    gridTemplateColumns: '1fr',
  },
});

const Time = styled('time', {
  fz: '$2',
  lh: '$tight',
  color: '$text3',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  fontFamily: '$mono',
});

export const Milestones: React.FC = () => {
  return (
    <List css={{ mb: '$6' }}>
      {milestones.map((m, idx) => (
        <StyledListItem key={idx}>
          <Box>
            <Time dateTime={m.date}>{m.date}</Time>
          </Box>
          <Box>
            <Heading size='3' css={{ mb: '$4' }}>
              {m.title}
            </Heading>
            <Paragraph css={{ lh: '$loose' }}>{m.description}</Paragraph>
          </Box>
        </StyledListItem>
      ))}
    </List>
  );
};
