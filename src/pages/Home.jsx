import { Link } from 'react-router-dom'
import NavUsers from '../layout/NavUsers'

const Home = () => {
  return (
    <div className='h-[80vh]'>
      <NavUsers />
      <div className='flex flex-col items-center justify-center h-[70vh]'>
        <h1 className='text-3xl font-bold pb-20'>Formulario de registro</h1>

        <Link className="text-cyan-50 border-2 border-nav-btn bg-nav-btn rounded-full px-10 py-3 font-bold hover:border-gray-200 ml-3" to='/register'>
          Registrar pasajero(s)
        </Link>
      </div>

      <span className='text-red-400 text-xs ml-20 font-bold'>ui incompleta 😥</span>
    </div>
  )
}

export default Home
