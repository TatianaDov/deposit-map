import React from 'react';
import { Button } from '@consta/uikit/Button';

import { rootStore } from '../../../store';

const MeteoMessageButton = () => {
  const { host } = rootStore;
  return (
    <>
      <h4>Message</h4>
      <Button
        label="New message"
        onClick={() => {
          if (host.setMessage) {
            host.setMessage('I am Drago! R-r-r', 'alert');
          }
        }}
      />
    </>
  );
};

export default MeteoMessageButton;
