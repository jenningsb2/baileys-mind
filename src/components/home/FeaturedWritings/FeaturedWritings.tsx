import { ReactComponent as InternalLinkIcon } from '@/assets/internal-link.svg';
import { SvgContainer } from '@/components/common/SvgContainer/SvgContainer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heading } from '@/components/common/primitives/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { Box } from '@/components/common/Box/Box';
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
  bp1: {
    display: 'block',
  },
});

const PostWrapper = styled(motion.div, {
  display: 'inline-block',
  position: 'relative',
  zIndex: '$0',
  bp1: {
    display: 'block',
  },
});

const PostContainer = styled('div', {
  br: '$1',
  px: '$3',
  py: '$4',
  display: 'inline-grid',
  cg: '$5',
  gridTemplateColumns: 'auto 1fr',
  position: 'relative',
  zIndex: '$2',
  bp1: {
    display: 'flex',
    fd: 'column',
    spaceY: '$4',
  },
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
  fontFamily: '$mono',
});

const IconContainer = styled(motion.div, {
  width: '14px',
  opacity: '0',
  path: {
    fill: '$action',
  },
});

const Description = styled(Paragraph, {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
            <Box css={{ spaceX: '$5', display: 'flex', jc: 'space-between' }}>
              <Box css={{ maxWidth: '319px' }}>
                <Heading size='3' css={{ mb: '$1', lh: '$primary' }}>
                  {writingData.title}
                </Heading>
                <Description size='3'>{writingData.description}</Description>
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
  return (
    <section>
      <Heading size='4' css={{ mb: '$5', bp1: { fz: '$3' } }}>
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
