import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { Navigation } from '@/components/Navigation/Navigation';
import { ThemeProvider } from '@/context/theme';
import { Footer } from '@/components/Footer/Footer';
import { styled } from 'stitches.config';

const Box = styled('div', {});

export const RootLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Box css={{ minHeight: '100vh', display: 'flex', fd: 'column' }}>
        <Box css={{ height: '95px' }}>
          <Navigation />
        </Box>
        <Box css={{ flex: '1', display: 'flex', pt: '$7', jc: 'center' }}>
          <Box css={{ width: '$full', maxWidth: '$site', mx: '$7' }}>
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
