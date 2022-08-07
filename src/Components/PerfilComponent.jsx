import Navbar from './Navbar.jsx';
import './style.css';
import post_img from "../images/avatar.jpg"

const PerfilComponent = ({ data }) => {

    return (
        <>
            <Navbar />
            <div className="Box">

                <img src={post_img} className="sideBox_main_image" alt="" />

                <div className="conteinerrigth">
                    <div className="config">
                        <h1>@santy_dev</h1>

                    </div>
                    <div className="config">
                        <span style={{ margin: 6 }}>1000 seguidores</span> <span style={{ margin: 6 }} >200 seguidos</span>
                    </div>
                </div>
            </div>

            <div className="contenedor__image">
                {data.map(p => (

                    < img className='imagen' src={p.id} alt="" />

                ))}
            </div>
        </>
    )
}

export default PerfilComponent;