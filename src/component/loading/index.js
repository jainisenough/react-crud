import React, { memo } from 'react';

const Loading = memo(
  () => <div>Loading...</div>,
  () => true
);

export default Loading;
