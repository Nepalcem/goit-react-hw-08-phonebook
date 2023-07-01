import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './sharedHeaderLayout.styled';
import { Suspense } from 'react';
import { useAuthorize } from 'components/hooks/useAuthorize';
import UserMenu from 'components/userMenu/UserMenu';
import LoginMenu from 'components/loginMenu/LoginMenu';


export const SharedHeaderLayout = () => {

  const {isLoggedIn} = useAuthorize();

// console.log(isLoggedIn);
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn ?  <UserMenu/> : <LoginMenu/>}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};


