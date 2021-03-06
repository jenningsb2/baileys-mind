import { WritingsData } from '@/@types/writings-data';
import { Box } from '@/components/common/Box/Box';
import { CustomLink } from '@/components/common/CustomLink/CustomLink';
import { PageWithLayoutType } from '@/components/common/layouts/layouts.model';
import { PrimaryLayout } from '@/components/common/layouts/PrimaryLayout/PrimaryLayout';
import { RootLayout } from '@/components/common/layouts/RootLayout/RootLayout';
import { PageHeadline } from '@/components/common/PageHeadline/PageHeadline';
import { Heading } from '@/components/common/primitives/Heading';
import { Text } from '@/components/common/primitives/Text';
import { Paths } from '@/data/paths';
import { groupDatesByYear, sortWritingsByDateDesc } from '@/utils/date-helpers';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { getAllWritingsData } from '@/utils/writings-data-helpers';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { styled } from 'stitches.config';

const YearGroup = styled('div', {
  display: 'grid',
  gridTemplateColumns: '70px 1fr',
  g: '$5',
  bp1: {
    gridTemplateColumns: '1fr',
  },
});
const List = styled('ul', {
  spaceY: '$5',
});
const ListItem = styled('li', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  cg: '$5',
});

type WritingProps = {
  writingsData: WritingsData[];
};
const Writing: PageWithLayoutType<WritingProps> = ({ writingsData }) => {
  useScrollToTop();

  const title = 'Bailey Jennings - Writing';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  const nonDrafts = writingsData.filter((writing) => !writing.metaData.draft);
  const groupedDates = groupDatesByYear(nonDrafts);
  return (
    <>
      <NextSeo {...SEO} />
      <PageHeadline>Writing</PageHeadline>
      <Box>
        <Box css={{ display: 'flex', jc: 'flex-end', mb: '$5' }}>
          <Heading as='span' size='2' color='3'>
            PUBLISHED
          </Heading>
        </Box>
        <Box css={{ spaceY: '$7' }}>
          {groupedDates.map(({ year, writings }) => (
            <YearGroup key={year}>
              <Box>
                <Heading as='h2' size='4'>
                  {year}
                </Heading>
              </Box>
              <List>
                {writings.map((writingData) => (
                  <ListItem key={writingData.fileName}>
                    <Box>
                      <CustomLink
                        as={`/${Paths.writing}/${writingData.fileName.replace(
                          /\.mdx?$/,
                          '',
                        )}`}
                        href={`/${Paths.writing}/[slug]`}>
                        {writingData?.metaData?.title}
                      </CustomLink>
                    </Box>
                    <Text
                      as='time'
                      size='2'
                      color='3'
                      css={{
                        fontFamily: '$mono',
                        fontWeight: '$bold',
                        ta: 'right',
                      }}>
                      {writingData?.metaData?.publishDate}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </YearGroup>
          ))}
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { writingsData: sortWritingsByDateDesc(getAllWritingsData()) },
  };
};

Writing.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Writing;
