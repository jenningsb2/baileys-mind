import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Paths } from '@/data/paths';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { WritingsData } from '@/@types/writings-data';
import { getAllWritingsData } from '@/utils/writings-data-helpers';
import { Heading } from '@/components/primitives/Heading';
import { Text } from '@/components/primitives/Text';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { styled } from 'stitches.config';
import { Box } from '@/components/Box/Box';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { groupDatesByYear, sortWritingsByDateDesc } from '@/utils/date-helpers';

const YearGroup = styled('div', {
  spaceY: '$6',
  display: 'grid',
  gridTemplateColumns: '70px 1fr',
  cg: '$5',
});
const List = styled('ul', {
  spaceY: '$4',
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
  // TODO: Write sort and grouping presenter for the `writingsData`
  // passed to this page

  useScrollToTop();

  const title = 'Bailey Jennings - Writing';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  const sortedDates = sortWritingsByDateDesc(writingsData);
  const groupedDates = groupDatesByYear(sortedDates);
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>Writing</Heading>
      <Box>
        <Box css={{ display: 'flex', jc: 'flex-end', mb: '$5' }}>
          <Heading as='span' size='2' color='3'>
            PUBLISHED
          </Heading>
        </Box>
        <Box css={{ spaceY: '$6' }}>
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
  return { props: { writingsData: getAllWritingsData() } };
};

Writing.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Writing;
