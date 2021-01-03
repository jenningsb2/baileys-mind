import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Paths } from '@/data/paths';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { WritingsData } from '@/types/writings-data';
import { getWritingsData } from '@/utils/get-writings-data';
import { Heading } from '@/components/primitives/Heading';
import { Text } from '@/components/primitives/Text';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { styled } from 'stitches.config';
import { Box } from '@/components/Box/Box';

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

type WritingsProps = {
  writings: WritingsData[];
};
const Writings: React.FC<WritingsProps> = ({ writings }) => {
  const title = 'Bailey Jennings - Writings';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>Writings</Heading>
      <Box>
        <Box css={{ display: 'flex', jc: 'flex-end', mb: '$5' }}>
          <Heading as='span' size='2' color='3'>
            PUBLISHED
          </Heading>
        </Box>
        <Box css={{ spaceY: '$6' }}>
          <YearGroup>
            <Box>
              <Heading as='h2' size='4'>
                2020
              </Heading>
            </Box>
            <List>
              {writings.map((writing) => (
                <ListItem key={writing.filePath}>
                  <Box>
                    <CustomLink
                      as={`${Paths.writings}/${writing.filePath.replace(
                        /\.mdx?$/,
                        '',
                      )}`}
                      href={`${Paths.writings}/[slug]`}>
                      {writing.data.title}
                    </CustomLink>
                  </Box>
                  <Text
                    as='time'
                    size='2'
                    color='3'
                    css={{ fontWeight: '$bold', ta: 'right' }}>
                    2020-01-24
                  </Text>
                </ListItem>
              ))}
            </List>
          </YearGroup>
          <YearGroup>
            <Box>
              <Heading as='h2' size='4'>
                2019
              </Heading>
            </Box>
            <List>
              {writings.map((writing) => (
                <ListItem key={writing.filePath}>
                  <Box>
                    <CustomLink
                      as={`${Paths.writings}/${writing.filePath.replace(
                        /\.mdx?$/,
                        '',
                      )}`}
                      href={`${Paths.writings}/[slug]`}>
                      {writing.data.title}
                    </CustomLink>
                  </Box>
                  <Text
                    as='time'
                    size='2'
                    color='3'
                    css={{ fontWeight: '$bold', ta: 'right' }}>
                    2020-01-24
                  </Text>
                </ListItem>
              ))}
            </List>
          </YearGroup>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { writings: getWritingsData() } };
};

(Writings as PageWithLayoutType).getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Writings;
