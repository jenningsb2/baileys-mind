import { FrontMatter } from '@/@types/frontmatter';

interface IReadingTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type WritingsMetaData = FrontMatter & {
  readingTime: IReadingTimeResults;
  year: string | null;
};

export type LinkedArticle = Pick<FrontMatter, 'title' | 'description'> & {
  link: string;
};

export interface WritingsData {
  content: string;
  metaData: WritingsMetaData;
  fileName: string;
  linkedArticles?: LinkedArticle[];
}
