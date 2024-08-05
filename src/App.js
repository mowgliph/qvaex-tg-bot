import './App.css';
import Button from './components/buttons/button';
import Card from './components/card/card';

const { getData } = require('./db/db');


function App() {
  return (<>
    <h2>Your Bag</h2>
    <Button title={'Add'} disable={false} type={'add'}/>
    <Button title={'Remove'} disable={false} type={'remove'}/>
    <Button title={'Checkout'} disable={false} type={'checkout'}/>
    <Card />
  </>);
}

export default App;
