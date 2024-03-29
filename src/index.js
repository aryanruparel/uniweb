import React from 'react';
import  ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import App from './App';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(
<HashRouter>
<App  />
</HashRouter>);