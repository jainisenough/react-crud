import React, {useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import storage from 'helper/storage';
import { ADMIN } from 'route-link';
import Loading from 'component/loading';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const getToken = await storage.getItem('X-Access-Token');
        setToken(getToken);
      } catch (e) {
        console.log(e);
        setToken(null);
      }
    })();
  }, []);
  return (
    <Route
      {...rest}
      render={props =>
        token === undefined ? <Loading /> : token ? <Component {...props} /> : <Redirect to={ADMIN.LOGIN} />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  exact: false
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default PrivateRoute;
