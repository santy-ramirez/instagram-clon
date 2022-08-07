import './style.css'


const SideBoxImage = ({ data }) => {

    return (
        <>
            {data.map(dat => (
                <div key={dat.name.first} className="SideBoxImageContainer">
                    <img src={dat.picture.medium} className="sideBox_image" alt=""></img>
                    <div>
                        <h4>{dat.name.first}</h4>
                        <p>@{dat.login.username}</p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default SideBoxImage