import { styled } from 'stitches.config';
import Image from 'next/image';
import { useTheme } from '@/context/theme';

const StyledAvatar = styled('div', {
  height: '20px',
  width: '20px',
  br: '$round',
  overflow: 'hidden',
  position: 'relative',
  variants: {
    theme: {
      dark: {
        border: '2px solid $grey100',
      },
      light: {
        border: 'none',
      },
    },
  },
});
interface AvatarProps {
  imgSrc: string;
  alt?: string;
}
export const Avatar: React.FC<AvatarProps> = ({ imgSrc, alt = '' }) => {
  const { theme } = useTheme();
  return (
    <StyledAvatar theme={theme}>
      <Image src={imgSrc} layout='fill' alt={alt} objectFit='cover' />
    </StyledAvatar>
  );
};
