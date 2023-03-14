import logo from './logo.svg';
import './App.css';
import Ex from './components/Example'
import Example1 from './components/Example1'
import StateEample from './components/StateEample';
import Book from './components/Book';
import StateDemo from './components/StateDemo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Example from './components/Example';
import NavBar from './components/NavBar';

function App() {
  const bookData  = {
    "name":"Awesome book",
    "description":"This is a good book"
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/example" element={<Example/>}/>
          <Route path="/book" element={<Book book={bookData}/>}/>
          <Route path="/state" element={<StateDemo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
