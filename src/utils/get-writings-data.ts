import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WritingData } from '@/types/writings-data';
import { writingsFilePaths, WRITINGS_PATH } from './mdxUtils';

export function getWritingsData(): WritingData[] {
  // Creating an array of writings from `writings/` directory
  const writings = writingsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(WRITINGS_PATH, filePath));

    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return writings;
}
