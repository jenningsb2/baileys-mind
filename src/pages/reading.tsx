import React from 'react';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
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
import { styled } from 'stitches.config';
import { ReadingGroup } from '@/components/ReadingGroup/ReadingGroup';

const ReadingList = styled(motion.ul, {
  '> *': {
    borderBottom: '1px solid $surface1',
    ':last-of-type': {
      border: 'none',
    },
  },
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

  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>What I'm reading</Heading>

      <Expansion>
        <Box css={{ spaceY: '$6' }}>
          {data.map((group) => (
            <ReadingGroup key={group.type} group={group} />
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
