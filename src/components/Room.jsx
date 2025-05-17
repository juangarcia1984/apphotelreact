import { Link } from "react-router-dom";

export default function Room({dataRoom}) {
    //console.log(dataRoom);
    //destructuring
    let {id, descripcion, precio,tipo, imagenes, metros_cuadrados} = dataRoom;
  return (
    <>
        <div className="w3-third w3-margin-bottom">
          <Link to={`/Rooms/${id}`}>
          <img src={imagenes[0]} alt="Norway" style={{"width":"100%", "height":"300px"}} />
          </Link>
            <div classNameName="w3-container w3-white">
                <h3>{tipo}</h3>
                <h6 className="w3-opacity">From ${precio}usd</h6>
                <p>{descripcion}</p>
                <p>{metros_cuadrados}mt2</p>
                <p classNameName="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i></p>
                <Link to={`/Rooms/${id}`} className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</Link>
            </div>
        </div>
    </>
  )
}
