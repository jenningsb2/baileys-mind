import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  LinkedArticle,
  WritingsData,
  WritingsMetaData,
} from '@/@types/writings-data';
import { writingsFilePaths, WRITINGS_PATH } from './mdxUtils';
import readingTime from 'reading-time';
import { FrontMatter } from '@/@types/frontmatter';
import { getYearFromDate } from './date-helpers';

function createDataObject(
  content: string,
  data: FrontMatter,
  fileName: string,
): WritingsData {
  return {
    content,
    fileName,
    linkedArticles: parseLinkedArticlesData(data.linked),
    metaData: {
      ...data,
      publishDate: data.publishDate ?? 'XXXX-XX-XX',
      readingTime: readingTime(content),
      year: getYearFromDate(data.publishDate) ?? 'XXXX',
      featured: data?.featured ? true : false,
      linked: data.linked ?? null,
    } as WritingsMetaData,
  };
}

function parseLinkedArticlesData(linked: string[]): LinkedArticle[] {
  if (!linked || !Array.isArray(linked)) return null;

  return linked
    .map((link) => {
      // TODO: DRY this up
      const fileName = `${link}.mdx`;
      const writingFilePath = path.join(WRITINGS_PATH, fileName);
      const source = fs?.readFileSync(writingFilePath);

      // MDX is parsed by 'gray-matter' lib
      const { data } = matter(source);

      return {
        ...(data as FrontMatter),
        link,
      };
    })
    .map((data) => ({
      title: data?.title,
      description: data?.description,
      link: data?.link,
    }));
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
