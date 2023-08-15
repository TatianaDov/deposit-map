import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import { ErrorBoundary } from './components/error-boundary';

const HotApp = () => (
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);

ReactDOM.render(<HotApp />, document.getElementById('root'));
