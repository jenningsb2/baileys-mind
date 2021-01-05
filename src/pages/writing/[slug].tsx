import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { writingsFilePaths } from '@/utils/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { WritingLayout } from '@/components/layouts/WritingLayout/WritingLayout';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { Heading } from '@/components/primitives/Heading';
import { Paragraph } from '@/components/primitives/Paragraph';
import { Box } from '@/components/Box/Box';
import { getWritingDataFromSlug } from '@/utils/writings-data-helpers';
import { WritingsMetaData } from '@/types/writings-data';
import { components } from '@/utils/mdx-components';
import { Avatar } from '@/components/Avatar/Avatar';

interface WritingPageProps {
  source: MdxRemote.Source;
  writingMetaData: WritingsMetaData;
}

const WritingPage: PageWithLayoutType<WritingPageProps> = ({
  source,
  writingMetaData,
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
      <NextSeo {...SEO} />
      <Box as='header' css={{ mb: '$3' }}>
        <Heading size='5' css={{ mb: '$3' }}>
          {writingMetaData?.title}
        </Heading>
        <Box>
          <Box>{/* <Avatar imgSrc='/images/bailey-headshot.jpg' /> */}</Box>
          <Box>
            <Paragraph>{writingMetaData.readingTime.text}</Paragraph>
          </Box>
        </Box>
      </Box>
      <main>{content}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, metaData } = getWritingDataFromSlug(params.slug as string);

  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components,
    scope: metaData as any,
  });

  return {
    props: {
      source: mdxSource,
      writingMetaData: metaData,
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
