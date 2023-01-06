import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import store, { history } from './store';
import reportWebVitals from './reportWebVitals';
// import { ConnectedRouter } from "connected-react-router";
import { HistoryRouter as Router } from 'redux-first-history/rr6';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <LocalizeProvider store={store}>
          <App />
        </LocalizeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
