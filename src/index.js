import React from 'react';
import ReactDOM from 'react-dom';
import { TasksProvider } from './context/TaskProvider';
import { GlobalStyle } from './styles/GlobalStyles';
import App from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
