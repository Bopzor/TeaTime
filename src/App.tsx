import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HeaderWithRouter } from './Header/Header';
import { TeasList } from './TeasList/TeasList';
import { TeaPage } from './TeaPage/TeaPage';
import { FormTea } from './FormTea/FormTea';
import { AddTeaButtonWithRouter } from './FormTea/AddTeaButton';
import { Provider } from './OrientationContext';
import { Welcome } from './Welcome/Welcome';

import { Tea } from './types/Tea';
import { Orientation } from './types/Orientation';
import { appStyle } from './appStyle';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faRedo,
  faSearch,
  faPlay,
  faPause,
  faTimes,
  faStop,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faRedo, faSearch, faPlay, faPause, faTimes, faStop, faPen);

const App = () => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [queryResults, setQueryResults] = useState<Tea[]>([]);
  const [orientation, setOrientation] = useState<Orientation>('portrait');

  useEffect(() => {
    const fetchedTeas = localStorage.getItem('teas');
    const teasSorted = parsedTeas(fetchedTeas).sort((a: Tea, b: Tea) => b.count - a.count);

    setTeas(teasSorted);

    window.addEventListener('resize', onScreenResize);
  }, []);

  const onScreenResize = () => {
    if (window.innerHeight <= 360) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  const parsedTeas = (fetchedTeas: string | null) => {
    if (!fetchedTeas) return [];
    return JSON.parse(fetchedTeas);
  };

  const findTea = (id: string): Tea => {
    const tea = teas.filter((t) => t.id === id);

    return tea[0];
  };

  const addTeaToLocalStorage = (tea: Tea) => {
    if (findTea(tea.id)) return;

    const updatedTeas: Tea[] = [...teas, tea];

    localStorage.setItem('teas', JSON.stringify(updatedTeas));

    setTeas(updatedTeas.sort((a: Tea, b: Tea) => b.count - a.count));
  };

  const updateTeaToLocalStorage = (tea: Tea) => {
    const idx: number = teas.findIndex((t) => t.id === tea.id);
    const updatedTeas: Tea[] = [
      ...teas.slice(0, idx),
      tea,
      ...teas.slice(idx + 1),
    ];

    localStorage.setItem('teas', JSON.stringify(updatedTeas));

    setTeas(updatedTeas.sort((a: Tea, b: Tea) => b.count - a.count));
  }

  const incrementTeaCount = (tea: Tea) => {
    const idx = teas.findIndex((t) => t.id === tea.id);
    const updatedTeas = [
      ...teas.slice(0, idx),
      { ...tea, count: ++tea.count },
      ...teas.slice(idx + 1),
    ];

    setTeas(updatedTeas.sort((a: Tea, b: Tea) => b.count - a.count));
    localStorage.setItem('teas', JSON.stringify(updatedTeas));
  };

  const searchQuery = (query: string) => {
    if (query.length < 3) {
      setQueryResults([]);
      return;
    }

    const results: Tea[] = [];
    const regexp = new RegExp(query, 'gi');

    for (let i = 0; i < teas.length; i++) {
      if (teas[i].name.match(regexp) || teas[i].brand.match(regexp)) results.push(teas[i]);
    }

    setQueryResults(results);
  };

  if (queryResults.length > 0) {
    return (
      <Provider value={orientation}>
        <div>
          <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

          <TeasList teas={queryResults} />

          <AddTeaButtonWithRouter />
        </div>
      </Provider>
    );
  }

  return (
    <Provider value={orientation}>
      <div style={appStyle}>
        <HeaderWithRouter searchQuery={(query) => searchQuery(query)} />

        <Switch>
          <Route
            exact
            path="/tea/add"
            render={(props) => <FormTea handleSubmitTea={(tea: Tea) => addTeaToLocalStorage(tea)} />}
          />

          {teas.length > 0 && (
            <Route
              exact
              path="/tea/add/:id"
              render={(props) => (
                <FormTea
                  currentTea={findTea(props.match.params.id)}
                  handleSubmitTea={(tea: Tea) => updateTeaToLocalStorage(tea)}
                />
              )}
            />
          )}

          {teas.length > 0 && (
            <Route
              path="/tea/:id"
              render={(props) => (
                <TeaPage
                  tea={findTea(props.match.params.id)}
                  incrementTeaCount={(tea) => incrementTeaCount(tea)}
                />
              )}
            />
          )}

          {teas.length <= 0 && <Welcome />}

          {teas.length > 0 && <Route path="/" render={(props) => <TeasList teas={teas} />} />}
        </Switch>

        <AddTeaButtonWithRouter />
      </div>
    </Provider>
  );
};

export default App;
