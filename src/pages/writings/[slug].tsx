import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { writingsFilePaths, WRITINGS_PATH } from '@/utils/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { WritingLayout } from '@/components/layouts/WritingLayout/WritingLayout';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { Heading } from '@/components/primitives/Heading';
import { Paragraph } from '@/components/primitives/Paragraph';
import { ListItem } from '@/components/primitives/ListItem';
import { List } from '@/components/primitives/List';
import { Hr } from '@/components/primitives/Hr';
import { BlockQuote } from '@/components/primitives/BlockQuote';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: MdxRemote.Components = {
  a: CustomLink,
  h1: (props) => <Heading as='h1' css={{ mb: '$5' }} {...props} />,
  h2: (props) => <Heading as='h2' size='5' css={{ mb: '$5' }} {...props} />,
  h3: (props) => <Heading as='h3' size='4' css={{ mb: '$5' }} {...props} />,
  p: (props) => <Paragraph css={{ mb: '$4' }} {...props} />,
  li: (props) => (
    <ListItem css={{ ':first-of-type': { pt: '$3' } }} {...props} />
  ),
  ul: (props) => <List css={{ listStyle: 'disc', ml: '$6' }} {...props} />,
  ol: (props) => <List as='ol' css={{ ml: '$6' }} {...props} />,
  hr: (props) => <Hr {...props} />,
  blockquote: (props) => <BlockQuote {...props} />,
};

type WritingPageProps = {
  source: MdxRemote.Source;
  frontMatter: {
    [key: string]: any;
  };
};

const WritingPage: React.FC<WritingPageProps> = ({ source, frontMatter }) => {
  // Hydrating `WritingPage` component with content from mdx file
  const content = hydrate(source, { components });

  // Grabbing information from frontmatter
  const title = `Bailey Jennings - ${frontMatter.title}`;
  const description = frontMatter?.description;

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
      <Heading css={{ mb: '$3' }}>{frontMatter.title}</Heading>
      <main>{content}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // rebuilding filename from 'slug' which is passed as a link param
  // (which was created in the `getStaticPaths` method)
  const writingFilePath = path.join(WRITINGS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(writingFilePath);

  // MDX is parsed by 'gray-matter' lib
  const { content, data } = matter(source);

  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components,
    scope: data,
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

(WritingPage as PageWithLayoutType).getLayout = (page) => {
  return (
    <RootLayout>
      <WritingLayout>{page}</WritingLayout>
    </RootLayout>
  );
};

export default WritingPage;
