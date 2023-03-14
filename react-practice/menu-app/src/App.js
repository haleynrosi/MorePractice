import logo from './logo.svg';
import './App.css';
import WeeklyMenu from './components/WeeklyMenu'
import WeekDay from './components/WeekDay'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';

function App() {
  const weeklyMenu = [
  {
    day: "Monday",
    menu: "Peanut Butter, and Jelly",
  },
  {
    day: "Tuesday",
    menu: "Chicken",
  },
  {
    day: "Wednesday",
    menu: "Soup",
  },
  {
    day: "Thursday",
    menu: "Rice and Beans",
  },
  {
    day: "Friday",
    menu: "Tuna",
  },
  {
    day: "Saturday",
    menu: "Grilled Cheese",
  },
  {
    day: "Sunday",
    menu: "Steak",
  },
]

const [data, setData] = useState()

const changeMenu = () =>{
  
}


  return (
    <div className="App">
     <h1>Menu for the Week</h1>
     <h4>Day of the Week:</h4>
      <WeekDay onClick = {changeMenu}/>
      <h4>Menu:</h4>
      <WeeklyMenu dailymenu = {data}/>
    </div>
  );
}

export default App;
