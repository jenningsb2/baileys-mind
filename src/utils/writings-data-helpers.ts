import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WritingsData, WritingsMetaData } from '@/types/writings-data';
import { writingsFilePaths, WRITINGS_PATH } from './mdxUtils';
import readingTime from 'reading-time';
import { FrontMatter } from '@/types/frontmatter';
import { formatDate, getYearFromDate } from './date-helpers';

function createDataObject(
  content: string,
  data: FrontMatter,
  fileName: string,
): WritingsData {
  return {
    content,
    fileName,
    metaData: {
      ...data,
      publishDate: formatDate((<unknown>data.publishDate) as Date),
      readingTime: readingTime(content),
      year: getYearFromDate(data.publishDate),
    } as WritingsMetaData,
  };
}

export function getWritingDataFromSlug(slug: string): WritingsData {
  // rebuilding filename from 'slug' which is passed as a link param
  // (which was created in the `getStaticPaths` method)
  const fileName = `${slug}.mdx`;
  const writingFilePath = path.join(WRITINGS_PATH, fileName);
  const source = fs.readFileSync(writingFilePath);

  // MDX is parsed by 'gray-matter' lib
  const { content, data } = matter(source);

  return {
    ...createDataObject(content, { ...data } as FrontMatter, fileName),
  };
}

export function getAllWritingsData(): WritingsData[] {
  // Creating an array of writings from `writings/` directory
  const writings = writingsFilePaths.map((fileName) => {
    const source = fs.readFileSync(path.join(WRITINGS_PATH, fileName));

    const { content, data } = matter(source);

    return {
      ...createDataObject(
        content,
        {
          ...data,
        } as FrontMatter,
        fileName,
      ),
    };
  });

  return writings;
}
