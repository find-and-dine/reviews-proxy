import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import path from 'path';

ReactDOM.render(<App restaurantId={path.basename(document.URL)} />, document.getElementById('app'));