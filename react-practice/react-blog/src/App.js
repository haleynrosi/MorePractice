import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Link} from  'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
        <Routes>
          <Route exact path ='/' element={<Home/>}></Route>
          <Route path ='/blog' element={<Blog/>}></Route>
          <Route path ='/about' element={<About/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
