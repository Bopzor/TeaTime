import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrientationContext } from '../OrientationContext';

import {
  teaPageWrapper,
  teaPageName,
  teaPageBrand,
  teaPageNameWrapper,
  teaPageTemperature,
  teaPageInfoWrapper,
  editButtonTeaStyle,
} from './teaPageStyle';
import { Timer } from '../Timer/Timer';

import { Tea } from '../types/Tea';
import { Orientation } from 'src/types/Orientation';

type TeaPageProps = {
  tea: Tea;
  incrementTeaCount: (tea: Tea) => void;
};

export const TeaPage: FunctionComponent<TeaPageProps> = ({ tea, incrementTeaCount }) => {
  const orientation: Orientation = useContext(OrientationContext);
  const { name, brand, temperature, time, id } = tea;

  return (
    <div style={teaPageWrapper(orientation)} >

      <div style={teaPageInfoWrapper}>
        <div style={teaPageNameWrapper}>
          <h2 style={teaPageName}>{ name }</h2>
          <div style={teaPageBrand}>{ brand }</div>
        </div>

        <div style={teaPageTemperature}>{ temperature }°C</div>
      </div>

      <Timer time={moment.duration(time)} incrementTeaCount={() => incrementTeaCount(tea)} />

      <div style={editButtonTeaStyle}>
      <Link to={`/tea/add/${id}`} aria-label={`Page of tea: ${name} ${brand}`}>
        <FontAwesomeIcon icon="pen" />
      </Link>
    </div>

    </div>

  );
};