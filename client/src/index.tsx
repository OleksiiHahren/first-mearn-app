import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Listings} from "./listings";

render(
    <Listings title="Hello first prop"></Listings>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
