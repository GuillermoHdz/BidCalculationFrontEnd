import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Add from './components/Add';
import 'bulma/css/bulma.min.css';
import VehicleList from './components/VehicleList';

function App() {
  return (
    <Fragment>
      <Header title="Bid Calculation"></Header>
      <Add></Add>
      <VehicleList></VehicleList>
    </Fragment>
  );
}

export default App;
