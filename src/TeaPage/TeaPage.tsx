import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { teaPageName, teaPageBrand, teaPageNameWrapper, teaPageTemperature } from './teaPageStyle';
import { Timer } from '../Timer/Timer';

import { Tea } from '../types/Tea';
import { AddTeaButton } from 'src/AddTea/AddTeaButton';

type TeaPageProps = {
  tea: Tea;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea }) => {
  const { name, brand, temperature, time, id } = tea;

  return (
    <div>

      <div style={teaPageNameWrapper}>
        <h2 style={teaPageName}>{ name }</h2>
        <div style={teaPageBrand}>{ brand }</div>
      </div>

      <div style={teaPageTemperature}>{ temperature }<sup>°c</sup></div>

      <Timer time={moment.duration(time)} />

      <AddTeaButton />

    </div>

  );
;}