import { IReadingGroup, IReadingListItem } from '@/@types/reading.types';
import { Box } from '@/components/common/Box/Box';
import { Heading } from '@/components/common/primitives/Heading';
import {
  ReadingListItemExpansion,
  ReadingListItemLink,
} from '@/components/reading/ReadingListItem/ReadingListItem';
import { chunkArray } from '@/utils/chunk-array';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'stitches.config';

const ReadingList = styled(motion.ul, {
  '> *': {
    borderBottom: '2px solid $surface1',
    ':last-of-type': {
      border: 'none',
    },
  },
});

const ShowMoreButton = styled(motion.button, {
  color: '$action',
  fontSize: '$3',
  fontFamily: '$primary',
});

interface ReadingGroupProps {
  group: IReadingGroup;
}
export const ReadingGroup: React.FC<ReadingGroupProps> = ({ group }) => {
  const chunkedBooksArray = React.useMemo(() => {
    return [...chunkArray(group.books, 3)];
  }, [group.books]);

  const [showMoreIndex, setShowMoreIndex] = React.useState<number>(0);

  const [booksToRender, setBooksToRender] = React.useState<IReadingListItem[]>(
    chunkedBooksArray[showMoreIndex],
  );

  function handleShowMoreClick(index: number): void {
    setShowMoreIndex((currentIndex) => currentIndex + 1);

    if (index + 1 > chunkedBooksArray.length - 1) return;

    setBooksToRender((books) => books.concat(chunkedBooksArray[index + 1]));
  }

  return (
    <Box>
      <Heading
        as={motion.h2}
        layout
        size='5'
        css={{ mb: '$3', textTransform: 'capitalize', bp1: { fz: '$4' } }}>
        {group.type.toString()}
      </Heading>
      <ReadingList layout>
        {booksToRender?.map((book) => {
          switch (book.type) {
            case 'link': {
              return <ReadingListItemLink key={book.title} book={book} />;
            }

            case 'expansion': {
              return <ReadingListItemExpansion key={book.title} book={book} />;
            }
            default:
              return null;
          }
        })}
      </ReadingList>
      {showMoreIndex < chunkedBooksArray.length - 1 ? (
        <Box
          as={motion.div}
          css={{ width: '$full', py: '$3', bc: '$uiBackground' }}
          layout>
          <ShowMoreButton
            onClick={() => handleShowMoreClick(showMoreIndex)}
            layout>
            Show more...
          </ShowMoreButton>
        </Box>
      ) : null}
    </Box>
  );
};
