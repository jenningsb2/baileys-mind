import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { styled } from 'stitches.config';
import { List } from '@/components/primitives/List';
import { Box } from '@/components/Box/Box';
import faker from 'faker';
import { Paths } from '@/data/paths';
import { Paragraph } from '@/components/primitives/Paragraph';
import { ReactComponent as ExternalLinkIcon } from '@/assets/external-link.svg';

function createFakeData() {
  return {
    id: faker.random.uuid,
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    image: faker.image.abstract(50, 74),
    href: `/${Paths.reading}`,
  };
}

const mockData = new Array(3)
  .fill(null)
  .map(() =>
    new Array(faker.random.number({ min: 2, max: 5 }))
      .fill(null)
      .map(createFakeData),
  );

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

type ReadingProps = {
  data: {
    id: () => string;
    title: string;
    description: string;
    image: string;
    href: string;
  }[][];
};

const Reading: PageWithLayoutType<ReadingProps> = ({ data }) => {
  const title = 'Bailey Jennings - Reading';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };

  // TODO: Design for max number of items and offer a 'show more' feature?
  // ? Pagination perhaps (maybe it's not that deep tho...)
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>What I'm reading</Heading>
      <Box css={{ spaceY: '$6' }}>
        {data.map((block, idx) => (
          <Box key={idx}>
            <Heading as='h2' size='5' css={{ mb: '$3' }}>
              Current
            </Heading>
            <List>
              {block.map((data, i) => (
                <BookListItem key={i}>
                  <ListItemContent>
                    <img src={data.image} alt='' />
                    <Box>
                      <Heading
                        as='h3'
                        size='4'
                        css={{ mb: '$2', lh: '$primary' }}>
                        {data.title}
                      </Heading>
                      <Paragraph css={{ mb: '$0' }}>
                        {data.description}
                      </Paragraph>
                    </Box>
                  </ListItemContent>
                  <ExternalLinkIcon width='24px' height='24px' />
                </BookListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </>
  );
};

Reading.getInitialProps = async () => {
  const data = mockData;
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
