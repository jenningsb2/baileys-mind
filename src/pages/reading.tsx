import React from 'react';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { styled } from 'stitches.config';
import { List } from '@/components/primitives/List';
import { Box } from '@/components/Box/Box';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { readingGroups } from '@/data/reading';
import { IReadingGroup } from '@/@types/reading.types';
import {
  ReadingListItemLink,
  ReadingListItemExpansion,
} from '@/components/ReadingListItem/ReadingListItem';
import { Expansion } from '@/components/Expansion/Expansion';
import { motion } from 'framer-motion';

const BookListItem = styled('li', {
  py: '$5',
  px: '$2',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  cg: '$5',
  borderBottom: '1px solid $surface1',
  ':last-of-type': {
    border: 'none',
  },
});
const ListItemContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  cg: '$2',
});
const BookImage = styled('img', {
  bc: '$surface3',
  width: '50px',
  height: '74px',
  display: 'block',
});

type ReadingProps = {
  data: IReadingGroup[];
};

const Reading: PageWithLayoutType<ReadingProps> = ({ data }) => {
  useScrollToTop();
  const title = 'Bailey Jennings - Reading';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };

  // TODO: Design for max number of items and offer a 'show more' feature
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>What I'm reading</Heading>

      <Expansion>
        <Box css={{ spaceY: '$6' }}>
          {data.map((group, i) => (
            <Box key={i}>
              <Heading
                as={motion.h1}
                layout
                size='5'
                css={{ mb: '$3', textTransform: 'capitalize' }}>
                {group.type.toString()}
              </Heading>
              <List as={motion.ul} layout>
                {group.books.map((book) => {
                  switch (book.type) {
                    case 'link': {
                      return (
                        <ReadingListItemLink key={book.title} book={book} />
                      );
                    }

                    case 'expansion': {
                      return (
                        <ReadingListItemExpansion
                          key={book.title}
                          book={book}
                        />
                      );
                    }
                    default:
                      return null;
                  }
                })}
              </List>
            </Box>
          ))}
        </Box>
      </Expansion>
    </>
  );
};

Reading.getInitialProps = async () => {
  const data = readingGroups;
  return { data };
};

Reading.getLayout = (page: any) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Reading;
