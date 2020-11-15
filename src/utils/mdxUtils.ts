import fs from 'fs';
import path from 'path';

// NOTES_PATH is useful when you want to get the path to a specific file
export const NOTES_PATH = path.join(process.cwd(), './src/notes');

// notesFilePaths is the list of all mdx files inside the NOTES_PATH directory
export const notesFilePaths = fs
  .readdirSync(NOTES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
