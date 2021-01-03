import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Paths } from '@/data/paths';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { WritingsData } from '@/types/writings-data';
import { getWritingsData } from '@/utils/get-writings-data';
import { Heading } from '@/components/elements/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';

type WritingsProps = {
  writings: WritingsData[];
};
const Writings: React.FC<WritingsProps> = ({ writings }) => {
  const title = 'Bailey Jennings - Writings';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>Writings</Heading>
      <ul>
        {writings.map((writing) => (
          <li key={writing.filePath}>
            <CustomLink
              as={`${Paths.writings}/${writing.filePath.replace(
                /\.mdx?$/,
                '',
              )}`}
              href={`${Paths.writings}/[slug]`}>
              {writing.data.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { writings: getWritingsData() } };
};

(Writings as PageWithLayoutType).getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default Writings;
