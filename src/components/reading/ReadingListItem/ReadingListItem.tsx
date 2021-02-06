import {
  IReadingListItemExpansion,
  IReadingListItemLink,
} from '@/@types/reading.types';
import Link from 'next/link';
import { styled } from 'stitches.config';
import { Heading } from '@/components/common/primitives/Heading';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { SvgContainer } from '@/components/common/SvgContainer/SvgContainer';
import { ReactComponent as ExternalLinkIcon } from '@/assets/external-link.svg';
import { ReactComponent as CaretIcon } from '@/assets/caret.svg';
import { Expansion } from '../Expansion/Expansion';
import { Box } from '@/components/common/Box/Box';
import { motion } from 'framer-motion';
import { useExpansion } from '@/context/expansion';
import { List } from '@/components/common/primitives/List';
import { ListItem } from '@/components/common/primitives/ListItem';
import { CustomLink } from '@/components/common/CustomLink/CustomLink';

const Wrapper = styled('li', {
  py: '$5',
  px: '$2',
});
const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  cg: '$3',
});
const Content = styled(motion.div, {});

// TODO: Validate these image dimensions (height is random, I think)
const ImageWrapper = styled(motion.div, {
  width: '50px',
  height: '74px',
  bc: '$action',
});
const Image = styled('img', {
  objectFit: 'contain',
});

const LinkIconContainer = styled('div', {
  width: '24px',
  path: {
    fill: '$action',
  },
});
const CaretIconContainer = styled(motion.div, {
  width: '24px',
  transform: 'rotate(180deg)',
  path: {
    fill: '$surface1',
  },
});

const Description = styled(Paragraph, {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

interface ReadingListItemLinkProps {
  book: IReadingListItemLink;
}

const ReadingListItemRoot: React.FC = ({ children }) => {
  return (
    <Wrapper as={motion.li} layout>
      <Container as={motion.div} layout>
        {children}
      </Container>
    </Wrapper>
  );
};

export const ReadingListItemLink: React.FC<ReadingListItemLinkProps> = ({
  book,
}) => {
  return (
    <Expansion.Item>
      <ReadingListItemRoot>
        <ImageWrapper layout>
          <Image src={book.image} />
        </ImageWrapper>
        <Content layout>
          <Heading
            as={motion.h3}
            layout
            size='4'
            css={{ lh: '$primary', mb: '$1' }}>
            {book.title}
          </Heading>
          <Description as={motion.p} layout>
            {book.description}
          </Description>
        </Content>
        <LinkIconContainer>
          <Link href={book.href} passHref>
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ display: 'block' }}>
              <SvgContainer svgWidth={24} svgHeight={24}>
                <ExternalLinkIcon />
              </SvgContainer>
            </a>
          </Link>
        </LinkIconContainer>
      </ReadingListItemRoot>
    </Expansion.Item>
  );
};

interface ReadingListItemExpansionProps {
  book: IReadingListItemExpansion;
}
const ReadingListExpansionTrigger: React.FC = () => {
  const { state } = useExpansion();
  return (
    <Expansion.Trigger>
      <CaretIconContainer
        initial='closed'
        animate={state.status}
        variants={{
          opened: {
            rotate: '0deg',
          },
          closed: {
            rotate: '180deg',
          },
        }}>
        <SvgContainer svgWidth={24} svgHeight={24}>
          <CaretIcon />
        </SvgContainer>
      </CaretIconContainer>
    </Expansion.Trigger>
  );
};

const Note = styled(ListItem, {});

export const ReadingListItemExpansion: React.FC<ReadingListItemExpansionProps> = ({
  book,
}) => {
  return (
    <Expansion.Item>
      <ReadingListItemRoot>
        <ImageWrapper layout>
          <Image src={book.image} />
        </ImageWrapper>
        <Content layout>
          <Box as={motion.header} layout>
            <Heading as={motion.h3} size='4' css={{ lh: '$primary', mb: '$1' }}>
              {book.title}
            </Heading>
            <Description as={motion.p} layout>
              {book.description}
            </Description>
          </Box>
          <Expansion.Body>
            <Box
              as={motion.div}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              css={{
                pt: '$5',
              }}
              layout>
              <Heading size='3' css={{ mb: '$3' }}>
                Notes
              </Heading>
              <List>
                {book.notes.map((note) => (
                  <Note key={note.title}>
                    <CustomLink as={note.href} href={note.href}>
                      {note.title}
                    </CustomLink>
                  </Note>
                ))}
              </List>
            </Box>
          </Expansion.Body>
        </Content>
        <Box>
          <ReadingListExpansionTrigger />
        </Box>
      </ReadingListItemRoot>
    </Expansion.Item>
  );
};
