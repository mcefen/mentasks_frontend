
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
/* import io from 'socket.io-client'

let socket
 */
const Proyectos = () => {

  const {proyectos, alerta} = useProyectos()

  /* useEffect(() => {
     socket = io(import.meta.env.VITE_BACKEND_URL)
     socket.emit('prueba', 'Antoni')

     socket.on('respuesta', (persona) => {
      console.log('Desde el frontend', persona)

     })
  }) */

  const {msg} = alerta
  
  return (
    <>
       <h1 className="text-4xl font-black">Proyectos</h1>

       {msg && <Alerta alerta={alerta}/>}
       
       <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? 
          proyectos.map(proyecto => (
          <PreviewProyecto
              key={proyectos._id}
              proyecto={proyecto}
          />
        ))  
        : <p className="mt-5 text-center text-gray-600 uppercase p-4 ">No hay proyectos aún</p> }
       </div>
    </>
  )
}

export default Proyectos