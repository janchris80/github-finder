import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {
  const { users, loading } = props;

  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user, index) => (
        <UserItem user={user} key={index} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
