import { CSSProperties } from 'react';
import { Orientation } from 'src/types/Orientation';

export const timerWrapper = (orientation: Orientation): CSSProperties => {
  if (orientation === 'portrait') {
    return {
      flex: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }
  }

  return {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
}


export const timeStyle: CSSProperties = {
  fontSize: '4.5em',
  fontFamily: 'monospace',
}

export const controlStyle: CSSProperties = {

}