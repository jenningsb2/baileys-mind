import { FrontMatter } from '@/types/frontmatter';

interface IReadingTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type WritingsMetaData = FrontMatter & {
  readingTime: IReadingTimeResults;
};

export interface WritingsData {
  content: string;
  data: WritingsMetaData;
  filePath: string;
}
