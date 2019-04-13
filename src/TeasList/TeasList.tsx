import React, { FunctionComponent } from 'react';
import { TeaBox } from '../TeaBox/TeaBox';
import { teasListStyle } from './teasListStyle';

import { Tea } from '../types/Tea';

type TeasListProps = {
  teas: Tea[];
};

export const TeasList: FunctionComponent<TeasListProps> = ({ teas }) => {
  return (
    <div style={teasListStyle}>
      { teas.map(tea => <TeaBox key={tea.id} tea={tea} />) }
    </div>
  );
};