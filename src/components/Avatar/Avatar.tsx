import { styled } from 'stitches.config';
// import Image from 'next/image';

const StyledAvatar = styled('div', {
  height: '15px',
  width: '15px',
  br: '$round',
});
interface AvatarProps {
  imgSrc: string;
}
export const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return (
    <StyledAvatar>
      {/* <Image src={imgSrc} layout='fill' objectFit='cover' /> */}
    </StyledAvatar>
  );
};
