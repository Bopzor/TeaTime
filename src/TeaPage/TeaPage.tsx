import React, { FunctionComponent, useEffect, useState } from 'react';
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
  incrementTeaCount: (tea: Tea) => void;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea, incrementTeaCount }) => {
  const [currentTea, setCurrentTea] = useState<Tea | null>(tea);

  useEffect(() => {
    if (!currentTea) {
      const fetchedTea = localStorage.getItem('current-tea');
      setCurrentTea(parsedTea(fetchedTea));
    } else {
      localStorage.setItem('current-tea', JSON.stringify(tea));
    }
  }, [currentTea]);

  const parsedTea = (fetchedTea: string | null) => {
    if (!fetchedTea)
      return null;
    return JSON.parse(fetchedTea);
  };

  if (!currentTea)
    return null;

  return (
    <div style={teaPageWrapper}>
      <div style={teaPageNameWrapper}>
        <h2 style={teaPageName}>{ currentTea.name }</h2>
        <div style={teaPageBrand}>{ currentTea.brand }</div>
      </div>

      <div style={teaPageTemperature}>{ currentTea.temperature }°C</div>

      <Timer time={moment.duration(currentTea.time)} incrementTeaCount={() => incrementTeaCount(currentTea)} />

    </div>

  );
;}