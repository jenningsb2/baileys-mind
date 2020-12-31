import fs from 'fs';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { writingsFilePaths, WRITINGS_PATH } from '@/utils/mdxUtils';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import path from 'path';
import matter from 'gray-matter';
import { Paths } from '@/data/paths';
import { CustomLink } from '@/components/CustomLink/CustomLink';

type WritingsProps = {
  writings: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
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
      <h1>Writings</h1>
      <ul>
        {writings.map((writing) => (
          <li key={writing.filePath}>
            <CustomLink
              as={`${Paths.writings}/${writing.filePath.replace(
                /\.mdx?$/,
                '',
              )}`}
              href={`${Paths.writings}/[slug]`}>
              {writing.data.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </>
  );
};

// TODO: Create a HOF that grabs this data
export const getStaticProps: GetStaticProps = async () => {
  // Creating an array of writings from `writings/` directory
  const writings = writingsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(WRITINGS_PATH, filePath));

    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { writings } };
};

(Writings as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default Writings;
