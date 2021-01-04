import { NextPage } from 'next';

export type PageWithLayoutType<P> = NextPage<P> & {
  getLayout: (page: any) => JSX.Element;
};
