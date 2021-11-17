import Header from 'components/Header';
import { ReactNode } from 'react';
import { Main } from 'styles/GlobalStyle';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
