import React, { FunctionComponent } from 'react';
import { TeaBox } from '../TeaBox/TeaBox';
import { teasListStyle } from './teasListStyle';
import { AddTeaButton } from 'src/AddTea/AddTeaButton';

import { Tea } from '../types/Tea';
import { Location } from 'history';
import { Header } from 'src/Header/Header';

type TeasListProps = {
  teas: Tea[];
  location: Location<any>
};

export const TeasList: FunctionComponent<TeasListProps> = ({ teas, location }) => {
  return (
    <div>
      <Header location={location} />
      <div style={teasListStyle}>
        { teas.map(tea => <TeaBox key={tea.id} tea={tea} />) }

        <AddTeaButton />
      </div>
    </div>
  );
};