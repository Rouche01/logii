import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Signin, Signup } from './pages/pages';
import pageUrl from './components/router/pageUrl';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={pageUrl.LOGIN_PAGE} component={Signin} />
        <Route exact path={pageUrl.REGISTER_PAGE} component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
