import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';
import { ADMIN } from '../../route-link';

const Router = props => {
  const routeProps = _omit(props, 'private');
  return props.private && !true ? <Redirect to={ADMIN.LOGIN} /> : <Route {...routeProps} />;
};

Router.defaultProps = {
  private: false,
  exact: false
};

Router.propTypes = {
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  private: PropTypes.bool
};

export default Router;
