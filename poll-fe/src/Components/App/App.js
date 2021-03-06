import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Views/Home';
import NewForm from '../../Views/NewForm/NewForm';

function App() {

  return(
    <div className={'theme-light'}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new-form" exact>
            <NewForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
