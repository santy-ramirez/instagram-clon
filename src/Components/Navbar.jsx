import { Link } from "react-router-dom";
import './style.css';
import navLogo from '../images/instalogo.png';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="leftNav">
                    <Link to="/"> <img src={navLogo} alt="insta nav logo" className="logo"></img></Link>
                </ul>
                <ul className="midNav">
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="search"></input>
                </ul>
                <ul className="rightNav">
                    <Link to="/">
                        <li><i className="fas fa-home"></i></li>
                    </Link>
                    <Link to="/post">
                        <li><i className="far fa-circle"></i></li>
                    </Link>
                    <li className="fa-circulo"><i className="far fa-compass"></i></li>
                    <li><i className="far fa-heart"></i></li>
                    <Link to="/perfil">
                        <li><i className=" far fa-circle"></i></li>
                    </Link>
                </ul>
            </nav>


        </>
    )
}

export default Navbar;