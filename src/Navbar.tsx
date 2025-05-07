import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/characters/new">New Character</Link></li>
            </ul>


        </div>
    )
}