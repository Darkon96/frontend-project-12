/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import init from './init';

const root = ReactDOM.createRoot(document.querySelector('div.h-100'));
root.render(await init());
