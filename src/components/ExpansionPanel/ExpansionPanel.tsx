import React from 'react';
import { Box } from '@/components/Box/Box';
import { Heading } from '../primitives/Heading';
import { Text } from '../primitives/Text';

// interface IBaseReadingListItem {
//   title: string;
//   description: string;
// }

// interface IReadingListItemExpansionPanel extends IBaseReadingListItem {
//   type: 'expansion';
//   notes: [
//     {
//       title: string;
//       href: string;
//     },
//   ];
// }
// interface IReadingListItemLinkType extends IBaseReadingListItem {
//   type: 'link';
//   href: string;
// }

// type ReadingListItemType =
//   | IReadingListItemLinkType
//   | IReadingListItemExpansionPanel;

interface ExpansionPanelHeaderProps {
  heading: string;
  body: string;
}
const ExpansionPanelHeader: React.FC<ExpansionPanelHeaderProps> = ({
  heading,
  body,
}) => {
  // * Can modify state
  return (
    <Box>
      <Heading>{heading}</Heading>
      <Text as='p'>{body}</Text>
    </Box>
  );
};
const ExpansionPanelBody: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

interface ExpansionPanelProps {
  header: JSX.Element;
  body: JSX.Element;
}

type ExpansionPanelStatus = 'opened' | 'closed';
type UpdateExpansionPanelStatus = React.Dispatch<
  React.SetStateAction<ExpansionPanelStatus>
>;

interface IExpansionPanelContext {
  expansionPanelstatus: ExpansionPanelStatus;
  setExpansionPanelStatus: UpdateExpansionPanelStatus;
}

const ExpansionPanelContext = React.createContext({} as IExpansionPanelContext);

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ header, body }) => {
  const [expansionPanelstatus, setExpansionPanelStatus] = React.useState<
    ExpansionPanelStatus
  >();
  return (
    // <ExpansionPanelContext.Provider value={}>
    <Box>
      <Box>{header}</Box>
      <Box>{body}</Box>
    </Box>
    // </ExpansionPanelContext.Provider>
  );
};

export { ExpansionPanel };
