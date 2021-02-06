import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { writingsFilePaths } from '@/utils/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { WritingLayout } from '@/components/common/layouts/WritingLayout/WritingLayout';
import { PageWithLayoutType } from '@/components/common/layouts/layouts.model';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { RootLayout } from '@/components/common/layouts/RootLayout/RootLayout';
import { Heading } from '@/components/common/primitives/Heading';
import { Text } from '@/components/common/primitives/Text';
import { Box } from '@/components/common/Box/Box';
import { getWritingDataFromSlug } from '@/utils/writings-data-helpers';
import { LinkedArticle, WritingsMetaData } from '@/@types/writings-data';
import { components } from '@/utils/mdx-components';
import { Avatar } from '@/components/common/Avatar/Avatar';
import { styled } from 'stitches.config';
import { LinkedArticles } from '@/components/writing/LinkedArticles/LinkedArticles';

const Container = styled('div', {
  width: '$full',
  maxWidth: '$content',
  mx: 'auto',
});
const BodyContentContainer = styled(Container, {
  bpWriting: {
    pr: 'calc(163px + 15px)',
  },
});

interface WritingPageProps {
  source: MdxRemote.Source;
  writingMetaData: WritingsMetaData;
  linkedArticles: LinkedArticle[];
}

const WritingPage: PageWithLayoutType<WritingPageProps> = ({
  source,
  writingMetaData,
  linkedArticles,
}) => {
  useScrollToTop();

  /* 
  * Hydrating `WritingPage` component with content from mdx file
    Custom components/renderers to pass to MDX. Since the MDX files aren't loaded by webpack, they have no knowledge of how to handle import statements. Instead, you must include components in scope here.
  */
  const content = hydrate(source, { components });

  // Handling undefined front matter
  // TODO: Create a proper error boundary
  // TODO: Make this into a custom hook
  React.useEffect(function checkForUndefinedFrontMatter() {
    if (process.env.NODE_ENV === 'development') {
      if (!(Object.keys(writingMetaData).length > 0)) {
        throw new Error('Need to add front matter to mdx file');
      }
    }
  }, []);

  // Grabbing information from frontmatter
  const title = `Bailey Jennings - ${writingMetaData?.title ?? 'Writing'}`;
  const description =
    writingMetaData?.description ??
    'Bailey Jennings is a Product Manager based in Richmond, Virginia';

  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  return (
    <>
      <Box as='article' css={{ width: '$full' }}>
        <NextSeo {...SEO} />
        <Container>
          <Box as='header' css={{ mb: '$6' }}>
            <Heading size='5' css={{ mb: '$5' }}>
              {writingMetaData?.title}
            </Heading>
            <Box css={{ display: 'flex', jc: 'space-between', ai: 'center' }}>
              <Box css={{ display: 'flex', spaceX: '$2', ai: 'center' }}>
                <Box>
                  <Avatar
                    imgSrc='/images/bailey-headshot.jpg'
                    alt='headshot of Bailey Jennings'
                  />
                </Box>
                <Box>
                  <Text color='3' size='3'>
                    {writingMetaData?.publishDate}
                  </Text>
                </Box>
              </Box>
              <Text color='3' size='3'>
                {writingMetaData?.readingTime?.text}
              </Text>
            </Box>
          </Box>
        </Container>
        <Box css={{ position: 'relative' }}>
          <BodyContentContainer>
            <main>{content}</main>
          </BodyContentContainer>
          {linkedArticles ? (
            <Box
              css={{
                position: 'absolute',
                height: '100%',
                top: 0,
                right: 0,
              }}>
              <Box css={{ position: 'sticky', top: 95 }}>
                <LinkedArticles links={linkedArticles} />
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, metaData, linkedArticles } = getWritingDataFromSlug(
    params.slug as string,
  );

  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components,
    scope: metaData as any,
  });

  return {
    props: {
      source: mdxSource,
      writingMetaData: metaData,
      linkedArticles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = writingsFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

WritingPage.getLayout = (page) => {
  return (
    <RootLayout>
      <WritingLayout>{page}</WritingLayout>
    </RootLayout>
  );
};

export default WritingPage;
