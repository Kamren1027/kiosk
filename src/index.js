import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import DataTable from './DataTable';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App/>, document.getElementById('inputMenu'));

ReactDOM.render(<DataTable
    title="Customers"
    columns={columns} 
    data={data}
    selectableRows // add for checkbox selection
  />, document.getElementById('dataTable'));


serviceWorker.unregister();

