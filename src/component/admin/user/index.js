import React, { memo } from 'react';
import './User.css';

const User = memo(
  () => {
    return <p>hello</p>;
  },
  () => true
);

export default User;
