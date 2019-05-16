import { CSSProperties } from 'react';
import { Orientation } from 'src/types/Orientation';

export const wrapperStyle = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    };
  }

  return {};
}

export const formStyle = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {
      display: 'flex',
      flexDirection: 'column',
    };
  }

  return {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginLeft: '20px',
  }
}

export const landscapeWrapper = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {};
  }

  return {
    display: 'flex',
    flexDirection: 'row',
  };
}

export const inputWrapperStyle = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {
      marginBottom: '20px',
    };
  }

  return {
    marginBottom: '20px',
    flex: 1,
  };
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
  border: 'none',
  borderRight: 'none',
  textAlign: 'center',
}

export const inputSecondsStyle: CSSProperties = {
  padding: '5px',
  border: 'none',
  borderLeft: 'none',
  textAlign: 'center',
}

export const timeSeparatorStyle: CSSProperties = {
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'inline-block',
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

export const timeInputWrapper: CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '3px',
  width: '132px',
};
