import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from '../SearchBar/SearchBar';
import {
  headerStyle,
  titleStyle,
  titleHiddenStyle,

} from './headerStyle';

export const Header: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
  <header style={headerStyle}>
    <Link to='/'>
      <h1 style={open ? titleHiddenStyle : titleStyle}>Tea Time</h1>
    </Link>

    <SearchBar open={open} setOpen={setOpen} />
  </header>
  );
};
