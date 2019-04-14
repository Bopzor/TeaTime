import { CSSProperties } from 'react';

export const wrapperStyle: CSSProperties = {
  height: '90%',
  marginLeft: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
}

export const inputWrapperStyle: CSSProperties = {
  marginBottom: '20px',
}

export const formStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

export const inputStyle: CSSProperties = {
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #00000033',
}

export const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: '5px',
}

export const inputMinutesStyle: CSSProperties = {
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #00000033',
  borderRight: 'none',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  textAlign: 'center',
}

export const inputSecondsStyle: CSSProperties = {
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #00000033',
  borderLeft: 'none',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  textAlign: 'center',
}

export const timeSeparatorStyle: CSSProperties = {
  display: 'inline-block',
  borderTop: '1px solid #00000033',
  borderBottom: '1px solid #00000033',
  color: "#00000033",
  paddingTop: '4px',
  paddingBottom: '5px',
}

export const submitButtonStyle: CSSProperties = {
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
}

export const addButtonTeaStyle: CSSProperties = {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  textAlign: 'center',
  padding: '10px',
  cursor: 'pointer',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
}