import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ADMIN } from '../../../route-link';

const Header = memo(
  ({ title }) => (
    <div>
      <Link to={ADMIN.LOGIN}>Login</Link>
      <p>{title}</p>
    </div>
  ),
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
