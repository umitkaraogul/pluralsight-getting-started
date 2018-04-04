import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Components/Class_Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Button label="Do"/>, document.getElementById('root'));

registerServiceWorker();
