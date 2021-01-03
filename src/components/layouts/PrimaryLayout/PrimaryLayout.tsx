import { styled } from 'stitches.config';

const Wrapper = styled('main', {
  display: 'flex',
  jc: 'center',
});

const Container = styled('div', {
  width: '$full',
  maxWidth: '$content',
});

export const PrimaryLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
