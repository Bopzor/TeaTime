import { CSSProperties } from 'react';
import { Orientation } from '../types/Orientation';

export const teaPageWrapper = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'space-between',
    }
  }

  return {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  }
}

export const teaPageInfoWrapper: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  textAlign: 'center',
}

export const teaPageNameWrapper: CSSProperties = {
  flex: 1,
  marginTop: '10px',
}

export const teaPageName: CSSProperties = {
  fontSize: '1.5em',
}

export const teaPageBrand: CSSProperties = {
  fontSize: '1em',
  color: '#999',
}

export const teaPageTemperature: CSSProperties = {
  flex: 1,
  fontSize: '2.5em',
}