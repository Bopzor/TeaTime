import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, withRouter, match } from 'react-router-dom';
import { Location, History } from 'history';

import { SearchBar } from '../SearchBar/SearchBar';
import {
  headerStyle,
  titleStyle,
  titleHiddenStyle,

} from './headerStyle';

type HeaderProps = {
  location: Location<any>;
  history: History;
  match: match;
  searchQuery: (query: string) => void;
}

const Header: FunctionComponent<HeaderProps> = ({ location, searchQuery }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
  <header style={headerStyle}>
    <Link to='/' aria-label="Teas list">
      <h1 style={open ? titleHiddenStyle : titleStyle}>Thé Prêt ?</h1>
    </Link>

    <SearchBar open={open} setOpen={setOpen} searchQuery={(query) => searchQuery(query)} />
  </header>
  );
};

export const HeaderWithRouter = withRouter(Header);
