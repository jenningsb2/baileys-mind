import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { Expansion } from '@/components/Expansion/Expansion';
import { Box } from '@/components/Box/Box';
import { AnimatePresence, motion } from 'framer-motion';

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
      <Expansion>
        <Expansion.Item>
          <Expansion.Header>
            <div style={{ height: '40px' }}>click me!</div>
          </Expansion.Header>
          <Expansion.Body>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                delay: 0.25,
              }}>
              <Box
                css={{
                  bc: '$blue',
                  pa: '$4',
                  br: '$1',
                }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt dolorem similique nesciunt provident qui explicabo,
                  nam numquam vitae ea rerum ab nulla, doloribus illum ad aut
                  dolores laboriosam voluptatibus! Aspernatur.
                </p>
              </Box>
            </motion.div>
          </Expansion.Body>
        </Expansion.Item>
        <Expansion.Item>
          <Expansion.Header>
            <div style={{ height: '40px' }}>click me!</div>
          </Expansion.Header>
          <Expansion.Body>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Expansion.Body>
        </Expansion.Item>
        <Expansion.Item>
          <Expansion.Header>
            <div style={{ height: '40px' }}>click me!</div>
          </Expansion.Header>
          <Expansion.Body>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Expansion.Body>
        </Expansion.Item>
      </Expansion>
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
