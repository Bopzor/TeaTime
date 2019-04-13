import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import { TeasList } from './TeasList/TeasList';
import { TeaPage } from './TeaPage/TeaPage';

import { Tea } from './types/Tea';

const teas: Tea[] = [
  {
    id: 'BlueDetox-KusmiTea',
    name: 'Blue Detox',
    brand: 'Kusmi Tea',
    temperature: 90,
    time: {
      minutes: 3,
      seconds: 30,
    },
    count: 0,
  },
  {
    id: 'BoucheEnCoeur-LAirDuThe',
    name: 'Bouche en Coeur',
    brand: 'L\'Air du thé',
    temperature: 80,
    time: {
      minutes: 3,
      seconds: 0,
    },
    count: 0,
  },
];

const App = () => {
  const findTea = (id: string): Tea => {
    const tea = teas.filter(t => t.id === id);
    return tea[0];
  };

  return (
    <div className='App'>
      <Header />

      <Switch>

        <Route path='/tea/:id'
          render={
            (props) => <TeaPage tea={findTea(props.match.params.id)} />
          }
        />

        <Route path='/'
          render={
            (props) => <TeasList teas={teas} />
          }
        />

      </Switch>
    </div>
  );
}

export default App;
