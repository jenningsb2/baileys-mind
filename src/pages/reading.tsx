import React from 'react';
import { PageWithLayoutType } from '@/components/common/layouts/layouts.model';
import { RootLayout } from '@/components/common/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/common/primitives/Heading';
import { PrimaryLayout } from '@/components/common/layouts/PrimaryLayout/PrimaryLayout';
import { Box } from '@/components/common/Box/Box';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { IReadingGroup } from '@/@types/reading.types';
import { Expansion } from '@/components/reading/Expansion/Expansion';
import { ReadingGroup } from '@/components/reading/ReadingGroup/ReadingGroup';
import { useBooks } from '@/utils/use-books';
import { styled } from 'stitches.config';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { PageHeadline } from '@/components/common/PageHeadline/PageHeadline';

const SkeletonTitle = styled('div', {
  height: '34px',
  width: '130px',
  bc: '$surface1',
  br: '$pill',
  mb: '$6',
});

const SkeletonBody = styled('div', {
  height: '80px',
  width: '$full',
  bc: '$surface3',
  br: '$1',
});

const Skeleton: React.FC = () => {
  return (
    <Box css={{ spaceY: '$7' }}>
      {new Array(3).fill(null).map((_, idx) => (
        <Box key={idx}>
          <SkeletonTitle />
          <Box css={{ spaceY: '$4' }}>
            <SkeletonBody />
            <SkeletonBody />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Reading: PageWithLayoutType<{}> = () => {
  useScrollToTop();
  const title = 'Bailey Jennings - Reading';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  const { books, isLoading, isError } = useBooks();

  return (
    <>
      <NextSeo {...SEO} />
      <PageHeadline>What I'm reading</PageHeadline>
      {!isLoading ? (
        <>
          {isError === undefined ? (
            <Expansion>
              <Box css={{ spaceY: '$7' }}>
                {(books as IReadingGroup[]).map((group) => (
                  <ReadingGroup key={group.type} group={group} />
                ))}
              </Box>
            </Expansion>
          ) : (
            <Paragraph>{isError?.message}</Paragraph>
          )}
        </>
      ) : (
        <Skeleton />
      )}
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
