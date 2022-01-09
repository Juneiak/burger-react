import { Route, Redirect } from 'react-router-dom';
import React, { FC } from 'react';
import { getUser } from '../../services/actions/auth';
import { useDispatch, useSelector } from '../../services/hooks';

export const ProtectedRoute: FC<any> = ({ children, ...restProps }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.auth.user);

  async function init() {
    await dispatch(getUser());
    setIsLoaded(true);
  }

  React.useEffect(() => {
    init();
  }, []);

  if (!isLoaded) return null;

  return (
    <Route
      {...restProps}
      render={({ location }) => (
        currentUser.name
          ? (children)
          : (
            <Redirect to={{
              pathname: '/login',
              state: { from: location },
            }}
            />
          )
      )}
    />
  );
};
