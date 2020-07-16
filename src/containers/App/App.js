import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'

import store from '../../store'
import Routes from '../Routes';

const App = () => (
    <ReduxProvider store={store}>
        <>
            <CssBaseline />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    </ReduxProvider>
);

export default App;