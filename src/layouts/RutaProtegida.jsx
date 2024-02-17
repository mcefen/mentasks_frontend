import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'

const RutaProtegida = () => {

    const {auth, cargando} = useAuth()

   if(cargando) return 'Cargando...'
  return (
    <>
     {auth._id ? (
        <div className='bg-gray-100'>
            <Headers/>
            <div className='md:flex md:min-h-screen'>
                <Sidebar/>
                <main className='p-10 flex-1'>
                <Outlet/>
                </main>
            </div>
        </div>
     ) : <Navigate to="/"/>}
    </>
  )
}

export default RutaProtegida