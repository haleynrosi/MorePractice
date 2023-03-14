import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <h1 className='greeting'>Hello, React!</h1>
      <Greeter name='Melanie'/>
      <Greeter name='Marcus'/>
      <Greeter name='Athena'/>
      <Greeter name='Rosie'/>
    </div>
  );
}
{/*comments in jsx */
}

export default App;
