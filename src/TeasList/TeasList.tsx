import React, { FunctionComponent } from 'react';
import { TeaBox } from '../TeaBox/TeaBox';
import { teasListStyle } from './teasListStyle';

import { Tea } from '../types/Tea';
import ExportTea from '../ExportTeas/ExportTeas';

type TeasListProps = {
  teas: Tea[];
};

export const TeasList: FunctionComponent<TeasListProps> = ({ teas }) => {
  return (
    <div>
      <div style={teasListStyle}>
        { teas.map(tea => <TeaBox key={tea.id} tea={tea} />) }
      </div>

      <ExportTea teas={teas} />
    </div>
  );
};
