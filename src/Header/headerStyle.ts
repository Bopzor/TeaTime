import { CSSProperties } from 'react';

export const headerStyle: CSSProperties = {
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 1px 2px 0px #475a1c',
  backgroundColor: '#bfff2f',
  padding: '5px 8px',
  position: 'sticky',
  top: '0px',
};

export const titleHiddenStyle: CSSProperties = {
  display: 'none',
}

export const titleStyle: CSSProperties = {
  fontFamily: 'Sedgwick Ave Display',
  fontSize: '2.3em',
  fontWeight: 'normal',
  color: '#211a1e',
};
