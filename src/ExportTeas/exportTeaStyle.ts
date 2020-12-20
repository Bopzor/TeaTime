import { CSSProperties } from 'react';

export const exportButtonTeaStyle: CSSProperties = {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: '#bfff2f',
  textAlign: 'center',
  padding: '10px',
  cursor: 'pointer',
  position: 'fixed',
  left: '20px',
  bottom: '20px',
};

export const dialogStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: `#00000066`,
};

export const dialogTitleStyle: CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
};

export const dialogContentStyle: CSSProperties = {
  fontSize: '0.875rem',
  color: '#444',
  textAlign: 'center',
};

export const cardStyle: CSSProperties = {
  height: '30vh',
  width: '80vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: `#fff`,
  borderRadius: 3,
  boxShadow: '0px 1px 2px 0px #475a1c',
  padding: '4px 8px',
};

export const buttonWrapperStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
}

export const cancelButtonStyle: CSSProperties = {
  width: '100px',
  border: '1px solid #00000033',
  borderRadius: '3px',
  backgroundColor: '#ccc',
  textAlign: 'center',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '10px 5px',
  cursor: 'pointer',
  alignSelf: 'center',
};

export const submitButtonStyle: CSSProperties = {
  ...cancelButtonStyle,
  backgroundColor: '#bfff2f',
};
