import { CSSProperties } from 'react';

export const teaBox: CSSProperties = {
  border: '1px solid #211a1e33',
  borderRadius: '3px',
  width: '150px',
  height: '150px',
  marginTop: '15px',
  backgroundColor: '#deefb9',
  display: 'flex',
  flexDirection: 'column',
};

export const teaBoxName: CSSProperties = {
  fontSize: '1.5em',
  textAlign: 'center',
  margin: '5px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  height: '58px',
};

export const teaBoxBrand: CSSProperties = {
  margin: '5px',
}

export const preparationInfosWrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flex: '1',
  alignItems: 'center',
  fontSize: '1.5em',
};

export const preparationInfos: CSSProperties = {
  flex: '1',
  textAlign: 'center',
};

export const separator: CSSProperties = {
  width: '1px',
  height: '70%',
  borderRight: '1px dashed #211a1e',
};
