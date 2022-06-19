import React, { Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './main/Calculator';
import './main/Calculator.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Fragment>
   <h1>Oi</h1>
    <Calculator/>
 </Fragment>
);

