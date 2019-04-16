import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { TeasList } from './TeasList/TeasList';
import { TeaPage } from './TeaPage/TeaPage';
import { AddTea } from './AddTea/AddTea';

import { Tea } from './types/Tea';
import { HeaderWithRouter } from './Header/Header';

import { appStyle } from './appStyle';
import { AddTeaButtonWithRouter } from './AddTea/AddTeaButton';

const App = () => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [queryResults, setQueryResults] = useState<Tea[]>([]);

  useEffect(() => {
    const fetchedTeas = localStorage.getItem('teas');
    const teasSorted = parsedTeas(fetchedTeas).sort((a: Tea, b: Tea) => b.count - a.count);

    setTeas(teasSorted);
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

    setTeas(updatedTeas.sort((a: Tea, b: Tea) => b.count - a.count));
  };

  const incrementTeaCount = (tea: Tea) => {
    const idx = teas.findIndex(t => t.id === tea.id);
    const updatedTeas = [
      ...teas.slice(0, idx),
      { ...tea, count: ++tea.count },
      ...teas.slice(idx + 1),
    ];

    setTeas(updatedTeas.sort((a: Tea, b: Tea) => b.count - a.count));
    localStorage.setItem('teas', JSON.stringify(updatedTeas));
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
  };

  if (queryResults.length > 0) {
    return (
      <div className='App'>

        <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

        <TeasList teas={queryResults} />

        <AddTeaButtonWithRouter />
      </div>
    );
  }

  return (
    <div style={appStyle}>

     <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

      <Switch>
        <Route exact path='/tea/add'
          render={
            (props) => <AddTea handleAddTea={(tea: Tea) => addTeaToLocalStorage(tea)} />
          }
        />

        <Route path='/tea/:id'
          render={
            (props) => <TeaPage
              tea={findTea(props.match.params.id)}
              incrementTeaCount={(tea) => incrementTeaCount(tea)}
            />
          }
        />

        <Route path='/'
          render={
            (props) => <TeasList teas={teas} />
          }
        />

      </Switch>

      <AddTeaButtonWithRouter />

    </div>
  );
}

export default App;
