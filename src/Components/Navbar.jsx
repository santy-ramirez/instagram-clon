import { Link } from "react-router-dom";
import './style.css';
import navLogo from '../images/instalogo.png';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="left_nav">
                    <Link to="/"> <img src={navLogo} alt="insta_nav_logo" className="logo"></img></Link>
                </ul>
                <ul className="mid_nav">
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="search"></input>
                </ul>
                <ul className="right_nav">
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