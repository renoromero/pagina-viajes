import { Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../data/data";
import { useContext } from "react";
import Context from "../contexto/Context";
import types from "../contexto/types";


const Comprar = () => {
    const {dispatch2, contratacion, sumaTotal, setSumaTotal}=useContext(Context)
    const {nombre} = useParams();
    const destinoEncontrado= data.find(dato=> dato.nombre === nombre)
    const encontrado=contratacion.find(objeto=> objeto.sitio === nombre)

    const navegacion=useNavigate()
    const volver= ()=> navegacion(-1)

    if(!destinoEncontrado){
        return <Navigate to="/no"/>
    }

    const contratar = () => {
        setSumaTotal(sumaTotal+destinoEncontrado.precio)
        const action= {
            type:types.contratar,
            payload:{nombre:nombre, precio:destinoEncontrado.precio}
        }
        dispatch2(action)
    }
    const anular = () => {
        setSumaTotal(sumaTotal-destinoEncontrado.precio)
        const action= {
            type:types.anular,
            payload:{nombre:nombre}
        }
        dispatch2(action)
    }

const imagen=`/images/${destinoEncontrado.imagen}`
    return (
        <>
        <h1>{nombre}</h1>
        <div className="servicios">{destinoEncontrado.servicio}</div>
        <div className="precio">{destinoEncontrado.precio}$</div>
       { (!encontrado) && <button className="boton contratar" onClick={contratar}>Contratar</button>}
       { (encontrado) && <button className="boton anular" onClick={anular}>Anular</button>}
        <div className="imagenGrande"><img src={imagen} alt="" /></div>
        <button onClick={volver}>Volver</button>
        </>
    )
}

export default Comprar