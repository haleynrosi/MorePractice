import {Link} from 'react-router-dom';
import '../css/NavBar.css'

const NavBar = ()=>{
    return (
        <div className='nav'>
            <Link to="/book">Books</Link>
            <Link to="/state">State Demo</Link>
        </div>
    )
}

export default NavBar;