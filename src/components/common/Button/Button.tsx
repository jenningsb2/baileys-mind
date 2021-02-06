import { defaultTransition } from '@/styles/animation';
import { styled } from 'stitches.config';
import Link from 'next/link';

const StyledButton = styled('button', {
  color: '$action',
  border: '1px solid $action',
  display: 'inline-flex',
  fz: '$2',
  jc: 'center',
  ai: 'center',
  lh: '$tight',
  px: '$5',
  height: 38,
  cursor: 'pointer',
  br: '5px',
  transition: defaultTransition,
  ':hover': {
    bc: '$action20',
  },
});

interface ILink {
  type: 'link';
  href: string;
}

interface IButton {
  type: 'button';
}

type ButtonProps =
  | (ILink & {
      [x: string]: any;
    })
  | (IButton & {
      [x: string]: any;
    });

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, ...otherProps } = props;
  return (
    <>
      {(() => {
        switch (type) {
          case 'link': {
            return (
              <Link as={props.href} href={props.href} passHref>
                <StyledButton as='a'>{children}</StyledButton>
              </Link>
            );
          }
          case 'button':
          default:
            return <StyledButton {...otherProps}>{children}</StyledButton>;
        }
      })()}
    </>
  );
};
