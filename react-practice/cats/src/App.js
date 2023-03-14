// import logo from './logo.svg';
// import './App.css';
// import CatList from './components/CatList'

// function App() {
//   return (
//     <div className="App">
//       <CatList/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import CatList from './components/CatList';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const[cats,setCats] = useState([]);

  const loadData=()=>{
      axios.get('https://api.thecatapi.com/v1/breeds').then(r=>{
          console.log(r.data)
          for(let c of r.data){
              console.log(c)
          }
          setCats(r.data)
      })
  }
  return (
    <div className="App">
      <CatList cats={cats}/>
      <button onClick={loadData}>Load data</button>
    </div>
  );
}

export default App;