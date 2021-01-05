import { styled } from 'stitches.config';
import Image from 'next/image';

const StyledAvatar = styled('div', {
  height: '15px',
  width: '15px',
  br: '$round',
  overflow: 'hidden',
});
interface AvatarProps {
  imgSrc: string;
}
export const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return (
    <StyledAvatar>
      {/* <Image src={imgSrc} layout='fill' objectFit='cover' /> */}
      <Image src={imgSrc} height={400} width={400} />
    </StyledAvatar>
  );
};
