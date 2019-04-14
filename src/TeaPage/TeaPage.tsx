import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { teaPageName, teaPageBrand, teaPageNameWrapper, teaPageTemperature } from './teaPageStyle';
import { Timer } from '../Timer/Timer';

import { Tea } from '../types/Tea';
import { AddTeaButton } from 'src/AddTea/AddTeaButton';
import { Location } from 'history';
import { Header } from 'src/Header/Header';

type TeaPageProps = {
  tea: Tea;
  location: Location<any>;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea, location }) => {
  const { name, brand, temperature, time, id } = tea;

  return (
    <div>
      <Header location={location} />

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