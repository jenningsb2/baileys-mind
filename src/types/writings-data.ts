import { FrontMatter } from '@/types/frontmatter';

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

export interface WritingsData {
  content: string;
  metaData: WritingsMetaData;
  fileName: string;
}
