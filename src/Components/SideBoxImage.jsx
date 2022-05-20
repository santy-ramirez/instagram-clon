import './style.css'
import image from "../images/avatar.jpg";

const SideBoxImage = () => {
    return (
        <>
            <div className="SideBoxImageContainer">
                    <img src={image} className="sideBox_image" alt=""></img>
                    <div>
                        <h4>Santy Dev</h4>
                        <p>SANTY_DES</p>
                    </div>
            </div>
        </>
    )
}

export default SideBoxImage