import { useContext } from "react"
import Context from "../contexto/Context"
import { Navigate } from "react-router-dom"


const RutasPublicas = ({children}) => {
    const { logeado } = useContext(Context)
    return (!logeado)
    ? children
    : <Navigate to ="/cp" />
}

export default RutasPublicas