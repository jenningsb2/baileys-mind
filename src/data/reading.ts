import { IReadingGroup } from '@/@types/reading.types';

export const readingGroups: IReadingGroup[] = [
  {
    type: 'current',
    books: [
      {
        type: 'link',
        title: 'Antifragile: Things That Gain From Disorder',
        description:
          'A book on how some systems actually benefit from disorder',
        href: 'https://www.goodreads.com/book/show/33279884-antifragile',
        image: '',
      },
      {
        type: 'link',
        title: 'The Phenomenon of Life',
        description:
          'Alexander describes a scientific view of the world in which all space-matter has perceptible degrees of life,...',
        href:
          'https://www.goodreads.com/book/show/106723.The_Phenomenon_of_Life',
        image: '',
      },
      {
        type: 'link',
        title: 'Where Is My Flying Car?: A Memoir of Future Past',
        description:
          'Back in the 60s we were all sure there would be flying cars in our future. Were the futurists and SF writers of the day just wrong?',
        href:
          'https://www.goodreads.com/book/show/42036377-where-is-my-flying-car',
        image: '',
      },
    ],
  },
  {
    type: 'next',
    books: [
      {
        type: 'link',
        title: 'The Little Book That Still Beats the Market',
        description:
          'In 2005, Joel Greenblatt published a book that is already considered one of the classics of finance literature.',
        href:
          'https://www.goodreads.com/book/show/8866003-the-little-book-that-still-beats-the-market',
        image: '',
      },
      {
        type: 'link',
        title: 'Breath: The New Science of a Lost Art',
        description:
          "No matter what you eat, how much you exercise, how skinny or young or wise you are, none of it matters if you're not breathing properly.",
        href: 'https://www.goodreads.com/book/show/48890486-breath',
        image: '',
      },
    ],
  },
  {
    type: 'read',
    books: [
      {
        type: 'link',
        title: 'Permutation City',
        description:
          'In the not-too-distant future, technology has given birth to immortality.',
        href: 'https://www.goodreads.com/book/show/18883652-permutation-city',
        image: '',
      },
      {
        type: 'link',
        title: 'Optionality: How to Survive and Thrive in a Volatile World',
        description:
          "It's hard not to be worried about the future, especially if you just lost your job, are trying to plan your career, or are suddenly missing thousands of dollars from your retirement account.",
        href: 'https://www.goodreads.com/book/show/55928854-optionality',
        image: '',
      },
      {
        type: 'link',
        title: 'Are Your Lights On?',
        description:
          'The fledgling problem solver invariably rushes in with solutions before taking time to define the problem being solved.',
        href: 'https://www.goodreads.com/book/show/11221270-are-your-lights-on',
        image: '',
      },
    ],
  },
];
