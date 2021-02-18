import {
  FrontMatter,
  LinkedArticle,
  WritingsData,
  WritingsMetaData,
} from '@/@types/writings-data';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { getYearFromDate } from './date-helpers';
import { writingsFilePaths, WRITINGS_PATH } from './mdxUtils';

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
      featured: Boolean(data?.featured),
      draft: Boolean(data?.draft),
      linked: data.linked ?? null,
    } as WritingsMetaData,
  };
}

function getFileSource(p1: string, p2: string): Buffer {
  const filePath = path.join(p1, p2);
  return fs?.readFileSync(filePath);
}

function parseLinkedArticlesData(linked: string[]): LinkedArticle[] {
  if (linked == null || !Array.isArray(linked)) return null;

  return linked
    .map((link) => {
      const fileName = `${link}.mdx`;
      // MDX is parsed by 'gray-matter' lib
      const { data } = matter(getFileSource(WRITINGS_PATH, fileName));

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

  // MDX is parsed by 'gray-matter' lib
  const { content, data } = matter(getFileSource(WRITINGS_PATH, fileName));

  return {
    ...createDataObject(content, { ...data } as FrontMatter, fileName),
  };
}

export function getAllWritingsData(): WritingsData[] {
  // Creating an array of writings from `writings/` directory
  const writings = writingsFilePaths.map((fileName) => {
    const { content, data } = matter(getFileSource(WRITINGS_PATH, fileName));

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
