import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

import { notesFilePaths, NOTES_PATH } from '../utils/mdxUtils';

import styles from '@scss/pages/Home.module.scss';
import { GetStaticProps } from 'next';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { CustomLink } from '@/components/CustomLink/CustomLink';

type HomeProps = {
  notes: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ notes }) => {
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
          {notes.map((note) => (
            <li key={note.filePath}>
              <CustomLink
                as={`notes/${note.filePath.replace(/\.mdx?$/, '')}`}
                href={`notes/[slug]`}>
                {note.data.title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Creating an array of notes from `notes/` directory
  const notes = notesFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NOTES_PATH, filePath));

    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { notes } };
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
