import { Suspense, FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';
import { setAuthPageBackgroundColor, isTodosPage } from 'utils';

const SharedLayout: FC = () => {
  const { pathname } = useLocation();

  setAuthPageBackgroundColor(pathname);

  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isTodosPage={isTodosPage(pathname)}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
