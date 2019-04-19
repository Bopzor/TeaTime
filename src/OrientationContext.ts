import React from 'react';
import { Orientation } from './types/Orientation';

export const OrientationContext = React.createContext<Orientation>('portrait');
export const Provider = OrientationContext.Provider;
