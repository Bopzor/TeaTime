import React, { FunctionComponent, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  searchIconStyle,
  searchInputHiddenStyle,
  searchInputOpenStyle,
  searchIconOpenStyle,
  closeSearchBarOpenStyle,
  closeIconStyle,
} from './searchBarStyle';

type SearchBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  searchQuery: (query: string) => void;
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ open, setOpen, searchQuery }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open)
      setQuery('');

    searchQuery(query);

  }, [open, query]);

  return (
    <div style={open ? { width: '100%' } : {}}>

      <div style={open ? searchIconOpenStyle : searchIconStyle} onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon="search" size="2x" />
      </div>

      <input
        type="text"
        style={open ? searchInputOpenStyle : searchInputHiddenStyle}
        placeholder="Rechercher"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div
        style={open ? closeSearchBarOpenStyle : closeIconStyle}
        onClick={() => setOpen(false)}
      >
        <FontAwesomeIcon icon="times" />

      </div>

    </div>
  );
}