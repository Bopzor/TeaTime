import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


import { Tea } from 'src/types/Tea';
import { formatSecondsToMinutesAndSeconds } from 'src/utils';

import {
  teaBox,
  teaBoxName,
  teaBoxBrand,
  preparationInfosWrapper,
  preparationInfos,
  separator,
} from './teaBoxStyle';


type TeaBoxProps = {
  tea: Tea;
};

export const TeaBox: FunctionComponent<TeaBoxProps> = ({ tea }) => {
  const { name, brand, temperature, time, id } = tea;
  return (
    <Link to={`/tea/${id}`} aria-label={`Page of tea: ${name} ${brand}`}>
      <div style={teaBox}>
        <h2 style={teaBoxName}>{ name }</h2>
        <div style={teaBoxBrand}>{ brand }</div>
        <div style={preparationInfosWrapper}>
          <div style={preparationInfos}>{ temperature }°C</div>
          <div style={separator} />
          <div style={preparationInfos}>{ formatSecondsToMinutesAndSeconds(moment.duration(time).asSeconds()) }</div>
        </div>
      </div>
    </Link>

  );
};
