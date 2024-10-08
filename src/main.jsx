import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context>
            <App/>
        </Context>
    </BrowserRouter>
)
