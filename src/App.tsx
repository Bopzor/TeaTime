import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { TeasList } from './TeasList/TeasList';
import { TeaPage } from './TeaPage/TeaPage';
import { AddTea } from './AddTea/AddTea';

import { Tea } from './types/Tea';
import { HeaderWithRouter } from './Header/Header';

const App = () => {
  const [teas, setTeas] = useState<Tea[]>([]);

  useEffect(() => {
    const fetchedTeas = localStorage.getItem('teas');

    setTeas(parsedTeas(fetchedTeas));
  }, []);

  const parsedTeas = (fetchedTeas: string | null) => {
    if (!fetchedTeas)
      return [];

    return JSON.parse(fetchedTeas);
  };

  const findTea = (id: string): Tea => {
    const tea = teas.filter(t => t.id === id);
    return tea[0];
  };

  const addTeaToLocalStorage = (tea: Tea) => {
    const updatedTeas: Tea[] = [ ...teas, tea ];

    localStorage.setItem('teas', JSON.stringify(updatedTeas));
  }

  return (
    <div className='App'>

     <HeaderWithRouter />

      <Switch>
        <Route exact path='/tea/add'
          render={
            (props) => <AddTea handleAddTea={(tea: Tea) => addTeaToLocalStorage(tea)} />
          }
        />

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
