import React, { memo } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import storage from 'helper/storage';
import { ADMIN } from 'route-link';

const Header = ({ title }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const isLoggedIn = pathname !== ADMIN.LOGIN;

  const logout = () => {
    storage.removeItem('X-Access-Token', () => {
      history.replace(ADMIN.LOGIN);
    });
  };

  return (
    <div>
      {isLoggedIn ? <Link onClick={logout}>Logout</Link> : <Link to={ADMIN.LOGIN}>Login</Link>}
      <p>{title}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(Header);
