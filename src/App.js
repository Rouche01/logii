import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Signin } from './pages/pages';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/signin" component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
