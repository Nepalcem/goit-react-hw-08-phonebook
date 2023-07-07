import { Outlet} from 'react-router-dom';
import { Container, Header, Link,StyledNav } from './sharedHeaderLayout.styled';
import { Suspense } from 'react';
import { useAuthorize } from 'components/hooks/useAuthorize';
import UserMenu from 'components/userMenu/UserMenu';
import LoginMenu from 'components/loginMenu/LoginMenu';

export const SharedHeaderLayout = () => {
  const { isLoggedIn } = useAuthorize();
  const showLoginMenu = !isLoggedIn;

  return (
    <Container>
      <Header>
        <StyledNav alignItemsBaseline={showLoginMenu}> 
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link> }
          {isLoggedIn ? <UserMenu /> : <LoginMenu />}
        </StyledNav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
