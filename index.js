import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

ReactDOM.render(<CalciteThemeProvider><App /></CalciteThemeProvider>, document.getElementById('root'));
registerServiceWorker();
