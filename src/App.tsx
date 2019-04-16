import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { TeasList } from './TeasList/TeasList';
import { TeaPage } from './TeaPage/TeaPage';
import { AddTea } from './AddTea/AddTea';

import { Tea } from './types/Tea';
import { HeaderWithRouter } from './Header/Header';

const App = () => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [queryResults, setQueryResults] = useState<Tea[]>([]);

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

    setTeas(updatedTeas);
  }

  const searchQuery = (query: string) => {
    if (query.length < 3) {
      setQueryResults([]);
      return;
    }

    const results: Tea[] = [];
    const regexp = new RegExp(query, 'gi');

    for (let i = 0; i < teas.length; i++) {
      if (teas[i].name.match(regexp) || teas[i].brand.match(regexp))
        results.push(teas[i]);
    }

    setQueryResults(results);
  }

  if (queryResults.length > 0) {
    return (
      <div className='App'>

        <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

        <TeasList teas={queryResults} />

      </div>
    );
  }

  return (
    <div className='App'>

     <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

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
