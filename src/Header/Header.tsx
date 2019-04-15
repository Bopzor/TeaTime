import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Location } from 'history';

import { SearchBar } from '../SearchBar/SearchBar';
import {
  headerStyle,
  titleStyle,
  titleHiddenStyle,

} from './headerStyle';

type HeaderProps = {
  location: Location<any>;
}

const Header: FunctionComponent<HeaderProps> = ({ location }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
  <header style={headerStyle}>
    <Link to='/'>
      <h1 style={open ? titleHiddenStyle : titleStyle}>Tea Time</h1>
    </Link>

    <SearchBar open={open} setOpen={setOpen} />
  </header>
  );
};

export const HeaderWithRouter = withRouter(Header);
