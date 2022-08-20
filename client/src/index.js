import './index.css';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BookProvider } from './context/booksContext.js';
import { FilterProvider } from './context/filterContext.js';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-bimpesij.eu.auth0.com"
        clientId="msHV0cdPHMr8TlqQSwEiS4rNPdlfl00X"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <BookProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </BookProvider>
    </Auth0Provider>
);
