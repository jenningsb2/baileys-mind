import { ReactComponent as InternalLinkIcon } from '@/assets/internal-link.svg';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heading } from '../primitives/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '../primitives/Paragraph';
import { Box } from '@/components/Box/Box';
import { WritingsData } from '@/@types/writings-data';
import { Paths } from '@/data/paths';

const visibilityVariants = {
  hovered: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

interface PostProps {
  date: string;
  title: string;
  description: string;
  href: string;
}

const StyledLink = styled('a', {
  display: 'inline-block',
});

const PostWrapper = styled(motion.div, {
  display: 'inline-block',
  position: 'relative',
  zIndex: '$0',
});

const PostContainer = styled('div', {
  br: '$1',
  pa: '$3',
  display: 'inline-grid',
  cg: '$5',
  gridTemplateColumns: 'auto 1fr',
  position: 'relative',
  zIndex: '$2',
});

const ContainerBg = styled(motion.div, {
  width: '$full',
  height: '$full',
  top: 0,
  left: 0,
  position: 'absolute',
  border: '1px solid $action',
  br: '$1',
  bc: '$action20',
  zIndex: '$1',
});

const Time = styled('time', {
  fz: '$2',
  lh: '$tight',
  color: '$text3',
  fontWeight: '$bold',
  textTransform: 'uppercase',
});

const IconContainer = styled(motion.div, {
  width: '14px',
  opacity: '0',
  path: {
    fill: '$action',
  },
});

interface WritingProps {
  writing: WritingsData;
}
const Writing: React.FC<WritingProps> = ({ writing }) => {
  const writingData = writing.metaData;
  return (
    <Link
      href={`/${Paths.writing}/${writing.fileName.replace(/\.mdx?$/, '')}`}
      passHref>
      <StyledLink>
        <PostWrapper whileHover='hovered'>
          <PostContainer>
            <Box>
              <Time dateTime={writingData.publishDate}>
                {writingData.publishDate}
              </Time>
            </Box>
            <Box css={{ spaceX: '$5', display: 'flex' }}>
              <Box css={{ maxWidth: '319px' }}>
                <Heading size='3' css={{ mb: '$1', lh: '$primary' }}>
                  {writingData.title}
                </Heading>
                <Paragraph size='3'>{writingData.description}</Paragraph>
              </Box>
              <IconContainer initial='hidden' variants={visibilityVariants}>
                <SvgContainer svgWidth={14} svgHeight={14}>
                  <InternalLinkIcon />
                </SvgContainer>
              </IconContainer>
            </Box>
          </PostContainer>
          <ContainerBg initial='hidden' variants={visibilityVariants} />
        </PostWrapper>
      </StyledLink>
    </Link>
  );
};

const List = styled('ul', {
  spaceY: '$5',
});
interface FeaturedWritingsProps {
  writings: WritingsData[];
}
export const FeaturedWritings: React.FC<FeaturedWritingsProps> = ({
  writings,
}) => {
  // TODO: Eventually some sort of sorting logic would be nice here
  return (
    <section>
      <Heading size='4' css={{ mb: '$6' }}>
        Featured writings
      </Heading>
      <List>
        {writings.map((writing) => (
          <li key={writing.fileName}>
            <Writing writing={writing} />
          </li>
        ))}
      </List>
    </section>
  );
};
