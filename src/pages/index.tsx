import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

import { writingsFilePaths, WRITINGS_PATH } from '../utils/mdxUtils';

import styles from '@scss/pages/Home.module.scss';
import { GetStaticProps } from 'next';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { Paths } from '@/data/paths';

type HomeProps = {
  writings: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ writings }) => {
  const title = 'Bailey Jennings - Home';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.container}>
        <h1>Home</h1>
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
      </div>
    </>
  );
};

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

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
