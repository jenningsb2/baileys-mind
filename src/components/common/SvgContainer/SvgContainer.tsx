import { styled } from 'stitches.config';

const Wrapper = styled('div', {
  position: 'relative',
  width: '$full',
  height: 0,
  '> svg': {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

interface SvgContainerProps {
  svgWidth?: number;
  svgHeight?: number;
}
export const SvgContainer: React.FC<SvgContainerProps> = ({
  children,
  svgHeight = 1,
  svgWidth = 1,
}) => {
  return (
    <Wrapper style={{ paddingTop: `${(svgHeight / svgWidth) * 100}%` }}>
      {children}
    </Wrapper>
  );
};
