import { CSSProperties } from 'react';

export const searchIconStyle: CSSProperties = {
  padding: '5px 6px',
  cursor: 'pointer',
  color: '#999',
  display: 'inline-block',
};

export const searchIconOpenStyle: CSSProperties = {
  padding: '5px 6px',
  cursor: 'pointer',
  color: '#bbb',
  display: 'inline-block',
  position: 'absolute',
  zIndex: 1,
}

export const searchInputHiddenStyle: CSSProperties = {
  display: 'none',
}

export const searchInputOpenStyle: CSSProperties = {
  display: 'inline-block',
  height: '40px',
  width: '100%',
  paddingLeft: '50px',
  boxSizing: 'border-box',
  position: 'relative',
  border: 'none',
  borderRadius: '3px',
}

export const closeSearchBarOpenStyle: CSSProperties = {
  padding: '5px 6px',
  cursor: 'pointer',
  color: '#bbb',
  display: 'inline-block',
  position: 'absolute',
  right: '5px',
  top: '1px',
}

export const closeIconStyle: CSSProperties = {
  display: 'none',
}