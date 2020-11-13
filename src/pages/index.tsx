import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

import { notesFilePaths, NOTES_PATH } from '../utils/mdxUtils';

import styles from '@scss/pages/Home.module.scss';
import { GetStaticProps, NextPage } from 'next';

type HomeProps = {
  notes: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
};

const Home: NextPage<HomeProps> = ({ notes }) => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Home</h1>
        <ul>
          {notes.map((note) => (
            <li key={note.filePath}>
              <Link
                as={`notes/${note.filePath.replace(/\.mdx?$/, '')}`}
                href={`notes/[slug]`}>
                <a>{note.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
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

export default Home;
