import React from 'react';
import ReactDOM from 'react-dom';
import { isDevelopment } from '../envUtil';

// eslint-disable-next-line import/prefer-default-export
export const registerReactAxe = async () => {
  if (isDevelopment()) {
    const { default: axe } = await import('react-axe');
    axe(React, ReactDOM, 1000);
  }
};
