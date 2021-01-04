import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { writingsFilePaths, WRITINGS_PATH } from '@/utils/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { WritingLayout } from '@/components/layouts/WritingLayout/WritingLayout';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { Heading } from '@/components/primitives/Heading';
import { Paragraph } from '@/components/primitives/Paragraph';
import { ListItem } from '@/components/primitives/ListItem';
import { List } from '@/components/primitives/List';
import { Hr } from '@/components/primitives/Hr';
import { BlockQuote } from '@/components/primitives/BlockQuote';
import { getWritingDataFromSlug } from '@/utils/writings-data-helpers';
import { WritingsMetaData } from '@/types/writings-data';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: MdxRemote.Components = {
  a: CustomLink,
  h1: (props) => <Heading as='h1' size='5' css={{ mb: '$5' }} {...props} />,
  h2: (props) => <Heading as='h2' size='4' css={{ mb: '$5' }} {...props} />,
  h3: (props) => <Heading as='h3' size='3' css={{ mb: '$5' }} {...props} />,
  p: (props) => <Paragraph css={{ mb: '$4' }} {...props} />,
  li: (props) => (
    <ListItem css={{ ':first-of-type': { pt: '$3' } }} {...props} />
  ),
  ul: (props) => (
    <List css={{ listStyle: 'disc', ml: '$6', mb: '$5' }} {...props} />
  ),
  ol: (props) => <List as='ol' css={{ ml: '$6', mb: '$5' }} {...props} />,
  hr: (props) => <Hr {...props} />,
  blockquote: (props) => <BlockQuote {...props} />,
};

type WritingPageProps = {
  source: MdxRemote.Source;
  frontMatter: WritingsMetaData;
};

const WritingPage: PageWithLayoutType<WritingPageProps> = ({
  source,
  frontMatter,
}) => {
  useScrollToTop();
  // Hydrating `WritingPage` component with content from mdx file
  const content = hydrate(source, { components });

  // Handling undefined front matter
  // TODO: Create a proper error boundary
  // TODO: Make this into a custom hook
  React.useEffect(function checkForUndefinedFrontMatter() {
    if (process.env.NODE_ENV === 'development') {
      if (!(Object.keys(frontMatter).length > 0)) {
        throw new Error('Need to add front matter to mdx file');
      }
    }
  }, []);

  // Grabbing information from frontmatter
  const title = `Bailey Jennings - ${frontMatter?.title ?? 'Writing'}`;
  const description =
    frontMatter?.description ??
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
      <Heading size='5' css={{ mb: '$3' }}>
        {frontMatter?.title}
      </Heading>
      <Paragraph>{frontMatter.readingTime.text}</Paragraph>
      <main>{content}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getWritingDataFromSlug(params.slug as string);

  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components,
    scope: data as any,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
