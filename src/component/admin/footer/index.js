import React, { memo } from 'react';

const Footer = memo(
  () => (
    <div>
      <p>This is copyright info.</p>
    </div>
  ),
  () => true
);

export default Footer;
