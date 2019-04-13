import React, { FunctionComponent } from 'react';
import { headerStyle, titleStyle, searchIconStyle } from './headerStyle';

export const Header: FunctionComponent = () => {
  return (
  <header style={headerStyle}>
    <h1 style={titleStyle}>Tea Time</h1>
    <i className="fas fa-search fa-2x" style={searchIconStyle} />
  </header>
  );
};
