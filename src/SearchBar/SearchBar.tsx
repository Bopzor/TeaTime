import React, { FunctionComponent } from 'react';

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
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ open, setOpen }) => {
  return (
    <div style={open ? { width: '100%' } : {}}>

      <div style={open ? searchIconOpenStyle : searchIconStyle} onClick={() => setOpen(true)}>
        <i className="fas fa-search fa-2x" />
      </div>

      <input type="text" style={open ? searchInputOpenStyle : searchInputHiddenStyle} placeholder="Rechercher" />

      <div style={open ? closeSearchBarOpenStyle : closeIconStyle} onClick={() => setOpen(false)}>
        <i className="fas fa-times" />
      </div>

    </div>
  );
}