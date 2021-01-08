import { styled } from 'stitches.config';

const Wrapper = styled('div', {
  display: 'flex',
  jc: 'center',
});

const Container = styled('div', {
  width: '$full',
  maxWidth: '$content',
});

export const WritingLayout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
