import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn, getIsRefreshing } from '../Redux/Selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
