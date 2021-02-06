import { Heading } from '@/components/common/primitives/Heading';

export const PageHeadline: React.FC = ({ children }) => {
  return <Heading css={{ mb: '$6', bp1: { fz: '$5' } }}>{children}</Heading>;
};
