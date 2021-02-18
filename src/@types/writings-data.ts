/**
 * Example of compliant frontmatter
 * ```markdown
 * ---
 * title: You must dig
 * description: This is a description
 * publishDate: '2021-01-04'
 * featured: true
 * draft: true
 * linked: ['some-path', 'another-path']
 * ---
 * <!--Formatting of `publishDate` is important!-->
 * ```
 */
export interface FrontMatter {
  title: string;
  description: string;
  publishDate: string | null;
  featured?: boolean;
  draft?: boolean;
  linked?: string[];
}

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
