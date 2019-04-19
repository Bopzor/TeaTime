import React, { FunctionComponent, useContext } from 'react';
import moment from 'moment';

import { OrientationContext } from '../OrientationContext';

import {
  teaPageWrapper,
  teaPageWrapperLandscape,
  teaPageName,
  teaPageBrand,
  teaPageNameWrapper,
  teaPageTemperature,
  teaPageInfoWrapper,
} from './teaPageStyle';
import { Timer } from '../Timer/Timer';

import { Tea } from '../types/Tea';

type TeaPageProps = {
  tea: Tea;
  incrementTeaCount: (tea: Tea) => void;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea, incrementTeaCount }) => {
  const orientation = useContext(OrientationContext);
  const { name, brand, temperature, time } = tea;

  return (
    <div style={orientation === 'portrait' ? teaPageWrapper : teaPageWrapperLandscape} >

      <div style={teaPageInfoWrapper}>
        <div style={teaPageNameWrapper}>
          <h2 style={teaPageName}>{ name }</h2>
          <div style={teaPageBrand}>{ brand }</div>
        </div>

        <div style={teaPageTemperature}>{ temperature }°C</div>
      </div>

      <Timer time={moment.duration(time)} incrementTeaCount={() => incrementTeaCount(tea)} />

    </div>

  );
};