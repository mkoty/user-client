/**
 * This file starts your application.
 **/

import React from 'react'
import {render} from 'react-dom'
import configureStore from './store'
import MainContainer from './container/main.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    const App = () => (
        <MuiThemeProvider>
            <MainContainer store={store}/>
        </MuiThemeProvider>
    );

    render(
        <App />,
        document.getElementById('content-container')
    )
});
