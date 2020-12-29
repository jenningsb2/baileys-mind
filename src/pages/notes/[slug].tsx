import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';

import { notesFilePaths, NOTES_PATH } from '../../utils/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { NoteLayout } from '@/components/layouts/NoteLayout/NoteLayout';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: any = {
  a: CustomLink,
};

type NotePageProps = {
  source: any;
  frontMatter: {
    [key: string]: any;
  };
};

const NotePage: React.FC<NotePageProps> = ({ source, frontMatter }) => {
  // Hydrating `NotePage` component with content from mdx file
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
      <h1>{frontMatter.title}</h1>
      {frontMatter.description ? <p>{frontMatter.description}</p> : null}
      <main>{content}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // rebuilding filename from 'slug' which is passed as a link param
  // (which was created in the `getStaticPaths` method)
  const noteFilePath = path.join(NOTES_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(noteFilePath);

  // MDX is parsed by 'gray-matter' lib
  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
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
  const paths = notesFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

(NotePage as PageWithLayoutType).getLayout = (page) => {
  return (
    <MainLayout>
      <NoteLayout>{page}</NoteLayout>
    </MainLayout>
  );
};

export default NotePage;
