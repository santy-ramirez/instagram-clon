import './style.css';
import navLogo from'../images/instalogo.png';
const Navbar = ()=>{
return(
    <>
    <nav>
        <ul className="leftNav">
     <img src={navLogo} alt="insta nav logo" className="logo"></img>
        </ul>
        <ul className="midNav">
        <i className="fas fa-search"></i>
        <input type="search" placeholder="search"></input>
        </ul>
        <ul className="rightNav">
           <a href="./post"> <li><i className="fas fa-home"></i></li></a>
            <li><i className="fas fa-location-arrow"></i></li>
            <li><i className="far fa-compass"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="far fa-circle"></i></li>
        </ul>
    </nav>
    <hr></hr>

    </>
)
}

export default Navbar;
