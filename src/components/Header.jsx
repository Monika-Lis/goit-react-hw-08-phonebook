import { useAuth } from 'hooks/useAuth';
import { Navigation } from './Navigation';
import { UserLogout } from './UserLogout';
import { UserNavigation } from './UserNavigation';
import css from '../Styles/Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <div className={css.links}>
        {isLoggedIn ? <UserLogout /> : <UserNavigation />}
        <Navigation />
      </div>
    </header>
  );
};
