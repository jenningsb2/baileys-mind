import faker from 'faker';
import { Paths } from '@/data/paths';
import {
  IBookData,
  IReadingGroup,
  IReadingListItemExpansion,
  IReadingListItemLink,
  ReadingGroupType,
} from '@/@types/reading.types';

const groups: ReadingGroupType[] = ['current', 'next', 'read'];

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function linkOrExpansion(): 'link' | 'expansion' {
  const number = generateRandomNumber(1, 2);
  return number === 1 ? 'link' : 'expansion';
}

function createBookData(): IBookData {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    image: faker.image.abstract(50, 74),
    href: `/${Paths.reading}`,
  };
}

function createExpansionItem(): IReadingListItemExpansion {
  return {
    ...createBookData(),
    type: 'expansion',
    notes: [
      {
        title: faker.lorem.sentence(),
        href: `/${Paths.reading}`,
      },
    ],
  };
}
function createLink(): IReadingListItemLink {
  return {
    ...createBookData(),
    type: 'link',
  };
}

export const readingGroups: IReadingGroup[] = groups.map((group) => {
  return {
    type: group,
    books: new Array(generateRandomNumber(2, 5)).fill(null).map(() => {
      if (linkOrExpansion() === 'link') {
        return {
          ...createLink(),
        };
      } else {
        return {
          ...createExpansionItem(),
        };
      }
    }),
  };
});
