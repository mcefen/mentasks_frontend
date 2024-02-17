import { createContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import clienteAxios from "../config/clienteAxios"

const AuthContex = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
           try {
            const {data} = await clienteAxios('/usuarios/perfil', config)
            setAuth(data)
            // navigate('/proyectos')
           } catch (error) {
              setAuth({})
           } 

           setCargando(false)

        }
        autenticarUsuario()

    }, [])

    const cerrarSesionAuth = () => {
        setAuth({})

    }

    return (
        <AuthContex.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesionAuth

            }}
        >
            {children}
        </AuthContex.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContex