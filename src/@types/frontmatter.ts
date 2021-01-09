/**
 * Example of compliant frontmatter
 * ```markdown
 * ---
 * title: You must dig
 * description: This is a description
 * publishDate: 2021-01-04
 * linked: ['some-path', 'another-path']
 * ---
 * <!--Formatting of `publishDate` is important!-->
 * ```
 */
export interface FrontMatter {
  title: string;
  description: string;
  publishDate: string | null;
  linked?: string[];
}
