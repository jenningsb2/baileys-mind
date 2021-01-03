import { ReactComponent as InternalLinkIcon } from '@/assets/internal-link.svg';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heading } from '../elements/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '../elements/Paragraph';

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
  gridTemplateColumns: '134px 1fr',
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

const Box = styled('div', {});

const Post: React.FC<PostProps> = ({ date, title, description, href }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>
        <PostWrapper whileHover='hovered'>
          <PostContainer>
            <div>
              <Time dateTime={date}>{date}</Time>
            </div>
            <Box css={{ spaceX: '$5', display: 'flex' }}>
              <Box css={{ maxWidth: '319px' }}>
                <Heading size='3' css={{ mb: '$1' }}>
                  {title}
                </Heading>
                <Paragraph size='3' css={{ mb: '$0' }}>
                  {description}
                </Paragraph>
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

export const FeaturedPosts: React.FC = () => {
  const data: PostProps = {
    date: 'December 14, 2020',
    title: 'You must dig',
    description: `Get to the motivations behind a request. 'Something' happened for that 'something' to be acknowledged as a problem by your...`,
    href: '/writings/you-must-dig',
  };
  return (
    <section>
      <Heading size='4' css={{ mb: '$6' }}>
        Featured posts
      </Heading>
      <List>
        {Array.from(new Array(3)).map((_, idx) => (
          <li key={idx}>
            <Post
              date={data.date}
              title={data.title}
              description={data.description}
              href={data.href}
            />
          </li>
        ))}
      </List>
    </section>
  );
};
