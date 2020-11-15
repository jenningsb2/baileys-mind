import { NextPage } from 'next';

export type PageWithLayoutType = NextPage & {
  getLayout: (page: any) => JSX.Element;
};
