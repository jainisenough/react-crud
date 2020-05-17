import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getUsers } from 'action/user';
import useStyles from './style';

const User = ({ getUsers, users }) => {
  const classes = useStyles();

  useEffect(() => {
    if (_isEmpty(users.data)) {
      getUsers();
    }
  }, [getUsers, users.data]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!_isEmpty(users.data) &&
            users.data.map(row => (
              <TableRow key={row.login}>
                <TableCell>
                  <img alt="user-pic" className={classes.profilePic} src={row.avatar_url} />
                </TableCell>
                <TableCell align="right">{row.login}</TableCell>
                <TableCell component="a" target="_blank" href={row.html_url} align="right">
                  {row.html_url}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  users: _get(state, 'user', {
    isPending: false,
    isFulfilled: false,
    isRejected: false
  })
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

User.propTypes = {
  users: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    isFulfilled: PropTypes.bool.isRequired,
    isRejected: PropTypes.bool.isRequired,
    data: PropTypes.array
  }),
  getUsers: PropTypes.func.isRequired
};

const UserComponent = connect(mapStateToProps, mapDispatchToProps)(User);
export default memo(UserComponent);
