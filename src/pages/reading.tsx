import React from 'react';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { Box } from '@/components/Box/Box';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { IReadingGroup } from '@/@types/reading.types';
import { Expansion } from '@/components/Expansion/Expansion';
import { ReadingGroup } from '@/components/ReadingGroup/ReadingGroup';
import { useBooks } from '@/utils/use-books';

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
  const { books, isLoading } = useBooks();
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>What I'm reading</Heading>
      {!isLoading ? (
        <Expansion>
          <Box css={{ spaceY: '$7' }}>
            {books.map((group) => (
              <ReadingGroup key={group.type} group={group} />
            ))}
          </Box>
        </Expansion>
      ) : null}
    </>
  );
};

Reading.getLayout = (page: any) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Reading;
