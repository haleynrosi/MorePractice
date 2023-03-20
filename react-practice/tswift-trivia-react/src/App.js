import logo from './logo.svg';
import './App.css';

import TaySwiftHome from './components/TaySwiftHome';
import TriviaHome from './components/TriviaHome';
import LyricTrivia from './components/LyricTrivia';
import FactTrivia from './components/FactTrivia';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route exact path='/' element={<TaySwiftHome/>}/>
           <Route path='/trivia-home' element={<TriviaHome/>}/>
           <Route path='/lyric-trivia' element={<LyricTrivia/>}/>
           <Route path='/fact-trivia' element={<FactTrivia/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
