import React, { FunctionComponent } from 'react';
import moment from 'moment';

import {
  teaPageWrapper,
  teaPageName,
  teaPageBrand,
  teaPageNameWrapper,
  teaPageTemperature
} from './teaPageStyle';
import { Timer } from '../Timer/Timer';

import { Tea } from '../types/Tea';

type TeaPageProps = {
  tea: Tea;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea }) => {
  const { name, brand, temperature, time, id } = tea;

  return (
    <div style={teaPageWrapper}>
      <div style={teaPageNameWrapper}>
        <h2 style={teaPageName}>{ name }</h2>
        <div style={teaPageBrand}>{ brand }</div>
      </div>

      <div style={teaPageTemperature}>{ temperature }°C</div>

      <Timer time={moment.duration(time)} />

    </div>

  );
;}