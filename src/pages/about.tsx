import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { Box } from '@/components/Box/Box';
import { Paragraph } from '@/components/primitives/Paragraph';
import { styled } from 'stitches.config';
import { CustomLink } from '@/components/CustomLink/CustomLink';
import { Button } from '@/components/common/Button/Button';
import { Paths } from '@/data/paths';

const ParagraphText = styled(Paragraph, {
  lh: '$loose',
});

const About: PageWithLayoutType<{}> = () => {
  useScrollToTop();
  const title = 'Bailey Jennings - About';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>About</Heading>
      <Box css={{ spaceY: '$7' }}>
        <Box>
          <ParagraphText css={{ mb: '$4' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParagraphText>
          <ParagraphText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </ParagraphText>
        </Box>
        <Box as='section'>
          <Box css={{ mb: '$6' }}>
            <Heading as='h2' size='4' css={{ mb: '$5' }}>
              Experience
            </Heading>
            <ParagraphText css={{ lh: '$loose' }}>
              Bailey is a highly experienced product manager who identifies and
              delivers strategies across product, innovation, portfolio
              management and communications. He is an expert in customer
              experience, with a passion for great content that keeps brand DNA
              at its core. Bailey has demonstrated commercial success across
              multiple channels in both trade, and digital platforms. Added to
              this he is also proudly the executive producer on award winning
              short films.
            </ParagraphText>
          </Box>
          <Box>
            <Heading as='h3' size='3' css={{ mb: '$6' }}>
              Professional Milestones
            </Heading>
            <Button type='link' href='/'>
              Curriculum Vitae
            </Button>
          </Box>
        </Box>
        <Box as='section'>
          <Heading as='h2' size='4' css={{ mb: '$5' }}>
            Get in Touch
          </Heading>
          <Paragraph size='4'>
            You can contact me via{' '}
            <CustomLink as={Paths.email} href={Paths.email} css={{ fz: '$4' }}>
              email
            </CustomLink>
            , or follow me on{' '}
            <CustomLink
              as={Paths.twitter}
              href={Paths.twitter}
              css={{ fz: '$4' }}>
              Twitter
            </CustomLink>{' '}
            or{' '}
            <CustomLink
              as={Paths.instagram}
              href={Paths.instagram}
              css={{ fz: '$4' }}>
              Instagram
            </CustomLink>
            .
          </Paragraph>
        </Box>
      </Box>
    </>
  );
};

About.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default About;
