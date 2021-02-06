import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { Navigation } from '@/components/common/Navigation/Navigation';
import { ThemeProvider } from '@/context/theme';
import { Footer } from '@/components/common/Footer/Footer';
import { Box } from '@/components/common/Box/Box';

export const RootLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Box
        css={{
          minHeight: '100vh',
          display: 'flex',
          fd: 'column',
          position: 'relative',
          zIndex: '$0',
        }}>
        <Box css={{ height: 95, position: 'relative', zIndex: '$2' }}>
          <Navigation />
        </Box>
        <Box
          css={{
            flex: '1',
            display: 'flex',
            pt: '$7',
            jc: 'center',
            position: 'relative',
            zIndex: '$1',
            bp1: {
              pt: '$5',
            },
          }}>
          <Box
            css={{
              width: '$full',
              maxWidth: '$site',
              mx: '$7',
              bp1: { mx: '$5' },
            }}>
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
