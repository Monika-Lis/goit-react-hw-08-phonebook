import { useAuth } from 'hooks/useAuth';
import { Navigation } from './Navigation';
import { UserLogout } from './UserLogout';
import { UserNavigation } from './UserNavigation';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <h1>Phonebook</h1>
      <Navigation />
      {isLoggedIn ? <UserLogout /> : <UserNavigation />}
    </header>
  );
};
