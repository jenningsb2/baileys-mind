import React from 'react';
import { IReadingGroup, IReadingListItem } from '@/@types/reading.types';
import {
  ReadingListItemLink,
  ReadingListItemExpansion,
} from '@/components/ReadingListItem/ReadingListItem';
import { Box } from '@/components/Box/Box';
import { Heading } from '@/components/primitives/Heading';
import { motion } from 'framer-motion';
import { styled } from 'stitches.config';
import { chunkArray } from '@/utils/chunk-array';

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
        as={motion.h1}
        layout
        size='5'
        css={{ mb: '$3', textTransform: 'capitalize' }}>
        {group.type.toString()}
      </Heading>
      <ReadingList layout>
        {(booksToRender as IReadingListItem[])?.map((book) => {
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
