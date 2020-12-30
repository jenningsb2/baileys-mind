const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    './src/pages/**/*{.js,.jsx,.ts,.tsx,.mdx}',
    '!./src/pages/_*{.js,.jsx,.ts,.tsx,.mdx}',
    '!./src/pages/404*{.js,.jsx,.ts,.tsx,.mdx}',
    `!./src/pages/writings`,
    '!./src/pages/api',
  ]).then((pages) => {
    const cleaned = pages.map((page) => {
      return page.replace('./src/pages', '');
    });
    return cleaned;
  });

  const writings = await globby([
    './src/writings/**/*{.md,.mdx}',
  ]).then((writings) =>
    writings.map((writing) => writing.replace('./src', '')),
  );

  const content = [...pages, ...writings];

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${content
              .map((page) => {
                // Removing file extensions
                const path = page
                  .replace('.jsx', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('.js', '')
                  .replace('.ts', '');
                const route = path === '/index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://baileyjennings.com${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
