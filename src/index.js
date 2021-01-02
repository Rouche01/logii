import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { saveState, loadState } from './reducers/localStorage';
import configureStore from './configureStore';
import './index.scss';
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
