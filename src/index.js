import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import TodoListContainer from './container/TodoListContainer';

const App = (
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
