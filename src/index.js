import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import LANG_IT from './translations/it'
import locale_it from 'react-intl/locale-data/it'
import {IntlProvider, addLocaleData} from "react-intl"

import './styles/main.scss';
import App from './views/app/App';

addLocaleData([...locale_it]);
const messages = {
    'it': LANG_IT
};

const routing = (
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale='it' messages={messages['it']}>
        <Router>
          <App />
        </Router>
      </IntlProvider>
    </PersistGate>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
