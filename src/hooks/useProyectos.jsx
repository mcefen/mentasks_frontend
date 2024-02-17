import { useContext } from "react"
import ProyectosContext from "../contex/ProyectosProvider"

const useProyectos = () => {
    return useContext(ProyectosContext)
}

export default useProyectos