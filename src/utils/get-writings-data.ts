import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WritingsData, WritingsMetaData } from '@/types/writings-data';
import { writingsFilePaths, WRITINGS_PATH } from './mdxUtils';
import readingTime from 'reading-time';
import { FrontMatter } from '@/types/frontmatter';

function createDataObject(
  content: string,
  data: FrontMatter,
): { content: string; data: WritingsMetaData } {
  return {
    content,
    data: {
      ...data,
      readingTime: readingTime(content),
    } as WritingsMetaData,
  };
}

export function getWritingDataFromSlug(slug: string) {
  // rebuilding filename from 'slug' which is passed as a link param
  // (which was created in the `getStaticPaths` method)
  const writingFilePath = path.join(WRITINGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(writingFilePath);

  // MDX is parsed by 'gray-matter' lib
  const { content, data } = matter(source);

  return createDataObject(content, data as FrontMatter);
}

export function getAllWritingsData(): WritingsData[] {
  // Creating an array of writings from `writings/` directory
  const writings = writingsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(WRITINGS_PATH, filePath));

    const { content, data } = matter(source);

    return {
      ...createDataObject(content, data as FrontMatter),
      filePath,
    };
  });

  return writings;
}
